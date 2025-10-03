# Condition Page Navigation Refactor Plan

## Objective
Convert from scroll-based navigation with collapsible sections to tab-view navigation where each subsection swaps content in/out.

## Current State (Problems)
1. Clicking navigation buttons scrolls to sections on a long page
2. Management/Research sections have accordion/collapsible behavior
3. Scroll tracking fights with manual navigation clicks
4. Complex state management with `isUserScrollingRef`, `activeSubSection`, scroll handlers
5. Double-click issues due to accordion toggles
6. Can't navigate back to first item in some cases

## Desired State (Solution)
1. Main tabs: Overview, Clinical, Management, Research (same as now)
2. Each main tab has sub-views that SWAP CONTENT (not scroll)
3. Click a sub-nav button = instant content swap with smooth transition
4. No scrolling within tab content
5. No collapsible accordions
6. Clean, predictable UX

## Implementation Steps

### Phase 1: State Setup ✅ DONE
- [x] Add `activeOverviewView` state (default: 'pathophysiology')
- [x] Add `activeClinicalView` state (default: 'clinical-presentation')
- [x] Add `activeManagementView` state (default: 'evidence-based-treatment')
- [x] Add `activeResearchView` state (default: 'key-research')
- [x] Remove `scrollToSection` function
- [x] Remove `isUserScrollingRef`

### Phase 2: Clean Up Old State (NEXT)
**File:** `components/ConditionPageClient.tsx`

**Remove:**
- [ ] `activeSection` state (line ~125)
- [ ] `activeSubSection` state (line ~126)
- [ ] Entire `useEffect` scroll tracking logic (lines ~128-215)
- [ ] `expandedManagementSections` state (was removed, verify)
- [ ] `toggleManagementSection` function (was removed, verify)
- [ ] `expandedResearchSections` state (lines ~104-107)
- [ ] `toggleResearchSection` function (lines ~109-114)

**Keep:**
- [ ] `activeTab` state - still needed for main tab switching
- [ ] `scrollProgress` state - still useful for progress bar
- [ ] `sidebarStyle` state - still needed for sticky sidebar
- [ ] Scroll handler BUT ONLY for progress bar and sticky sidebar (not section tracking)

### Phase 3: Update Navigation Buttons
**File:** `components/ConditionPageClient.tsx`

**Overview Tab Sub-Navigation (around line 558-567):**
```typescript
// OLD:
onClick={() => scrollToSection('pathophysiology', { subsection: 'pathophysiology' })}
className={activeSubSection === 'pathophysiology' ? ...}

// NEW:
onClick={() => setActiveOverviewView('pathophysiology')}
className={activeOverviewView === 'pathophysiology' ? ...}
```

**Clinical Tab Sub-Navigation (around line 484-544):**
```typescript
// OLD:
onClick={() => scrollToSection('clinical-presentation', { subsection: 'clinical-presentation' })}
className={activeSubSection === 'clinical-presentation' ? ...}

// NEW:
onClick={() => setActiveClinicalView('clinical-presentation')}
className={activeClinicalView === 'clinical-presentation' ? ...}
```

**Management Tab Sub-Navigation (around line 558-665):**
```typescript
// OLD:
onClick={() => scrollToSection('evidence-based-treatment', { subsection: 'evidence-based-treatment' })}
className={activeSubSection === 'evidence-based-treatment' ? ...}

// NEW:
onClick={() => setActiveManagementView('evidence-based-treatment')}
className={activeManagementView === 'evidence-based-treatment' ? ...}
```

**Research Tab Sub-Navigation (around line 709-748):**
```typescript
// OLD:
onClick={() => scrollToSection('key-research', { subsection: 'key-research' })}
className={activeSubSection === 'key-research' ? ...}

// NEW:
onClick={() => setActiveResearchView('key-research')}
className={activeResearchView === 'key-research' ? ...}
```

**Main Tab Buttons:**
```typescript
// OLD:
onClick={() => scrollToSection('section-overview', { tab: 'overview' })}

// NEW:
onClick={() => setActiveTab('overview')}
```

### Phase 4: Update Content Rendering
**File:** `components/ConditionPageClient.tsx`

**Change from:** Long scrollable sections with `data-section` attributes and collapsible wrappers

**Change to:** Conditional rendering based on active view state

**Example for Overview Tab (around line 1300+):**
```typescript
{/* OLD - long scrollable content with data-section attributes */}
{activeTab === 'overview' && (
  <div id="section-overview">
    <div data-section="pathophysiology">...</div>
    <div data-section="biomechanics">...</div>
  </div>
)}

{/* NEW - swap content based on activeOverviewView */}
{activeTab === 'overview' && (
  <motion.div
    key={activeOverviewView}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2 }}
  >
    {activeOverviewView === 'pathophysiology' && (
      <div>
        {/* Pathophysiology content */}
      </div>
    )}
    {activeOverviewView === 'biomechanics' && (
      <div>
        {/* Biomechanics content */}
      </div>
    )}
  </motion.div>
)}
```

**Same pattern for:**
- Clinical tab → `activeClinicalView` with views: clinical-presentation, differential, when-to-seek
- Management tab → `activeManagementView` with views: evidence-based-treatment, treatment-techniques, timeline, prognosis, measuring-success, faqs
- Research tab → `activeResearchView` with views: key-research, research-insights

### Phase 5: Simplify Scroll Handler
**File:** `components/ConditionPageClient.tsx`

**Keep ONLY:**
```typescript
useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const headerHeight = 96;

        // Progress bar
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollProgress(progress);

        // Sticky sidebar
        const sidebarContainer = document.getElementById('sidebar-container');
        if (sidebarContainer) {
          const containerTop = sidebarContainer.getBoundingClientRect().top + scrollTop;
          if (scrollTop > containerTop - headerHeight) {
            setSidebarStyle({
              position: 'fixed',
              top: `${headerHeight}px`,
              width: '224px',
              maxHeight: `calc(100vh - ${headerHeight + 24}px)`,
              overflowY: 'auto'
            });
          } else {
            setSidebarStyle({ position: 'static' });
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  };
}, []);
```

**Remove:** All section tracking, subsection tracking, validTabIds logic

### Phase 6: Remove Accordion/Collapsible Logic
**File:** `components/ConditionPageClient.tsx`

**In Management section content rendering:**
- Remove all collapsible wrappers
- Remove `expandedManagementSections` checks
- Remove expand/collapse buttons on section headers
- Show content directly based on `activeManagementView`

**In Research section content rendering:**
- Remove all collapsible wrappers
- Remove `expandedResearchSections` checks
- Show content directly based on `activeResearchView`

### Phase 7: Update Mobile Navigation
**File:** `components/ConditionPageClient.tsx` (around line 758+)

**Change mobile nav onClick handlers:**
```typescript
// OLD:
onClick={() => {
  scrollToSection('section-overview', { tab: 'overview' });
  setMobileNavOpen(false);
}}

// NEW:
onClick={() => {
  setActiveTab('overview');
  setMobileNavOpen(false);
}}
```

### Phase 8: Testing Checklist
- [ ] All 4 main tabs open correctly
- [ ] Overview sub-views (pathophysiology, biomechanics) swap smoothly
- [ ] Clinical sub-views (clinical-presentation, differential, when-to-seek) swap smoothly
- [ ] Management sub-views (all 6) swap smoothly
- [ ] Research sub-views swap smoothly
- [ ] No console errors
- [ ] Smooth animations between views
- [ ] Sidebar stays sticky
- [ ] Progress bar still works
- [ ] Mobile navigation works
- [ ] Can navigate between any views in any order
- [ ] Active state highlighting works correctly

## Key Files
- **Main file:** `/Users/kareemhassanein/Desktop/code/physiotherapy-next/components/ConditionPageClient.tsx` (~2000+ lines)

## Rollback Strategy
- Git commits after each phase
- Keep backup: `components/ConditionPageClient.tsx.backup`
- Can revert with: `git checkout HEAD~1 components/ConditionPageClient.tsx`

## Success Criteria
1. Zero scrolling within tab content
2. Instant view swaps with smooth animations
3. Clean, predictable navigation
4. No glitches or race conditions
5. Can navigate to any view from any view
6. Build succeeds with no errors
7. Works on live website (kinetikarephysio.com)

---
**Status:**
- Phase 1 ✅ Complete
- Phase 2 ✅ Complete
- Phase 3 ✅ Complete
- Phase 4 🔄 Partial (Overview ✅, Clinical ✅, Management ⏳, Research ⏳)

**Created:** 2025-01-03
**Last Updated:** 2025-01-03

## Phase 4 Notes
Management and Research tabs are complex (654+ lines for Management alone) with heavy accordion/collapsible integration. These require combined Phase 4+6 work to:
1. Convert to view-based rendering (Phase 4)
2. Remove accordion logic (Phase 6)

Current working state: Overview and Clinical tabs fully converted to view swapping with smooth animations.
