# Medical Glossary System - IN RESERVE

## Status: Built but Not Integrated (September 2025)

This sophisticated medical term visual reference system has been fully developed but is currently held in reserve, not integrated into the production website.

## Purpose
Enhance patient education by making complex medical terms visually understandable through:
- Interactive tooltips with definitions and pronunciations
- Visual reference modals with medical diagrams
- Automatic term identification and highlighting
- Mobile-optimized interactions

## Components Created

### 1. Core Components
All located in `/components/medical-glossary/`:
- **MedicalTerm.tsx** - Individual term with hover/tap tooltip
- **VisualReferenceModal.tsx** - Full-screen gallery for medical diagrams
- **TermHighlighter.tsx** - Automatic text processing
- **MedicalTermProvider.tsx** - Context and EnhancedParagraph wrapper

### 2. Data Structure
Located in `/lib/medical-glossary-data.ts`:
- 15 medical terms with definitions
- Pronunciations for complex terms
- Visual reference placeholders
- Categories: anatomy, movement, condition, treatment

### 3. Terms Included
- **Anatomy**: intervertebral disc, rotator cuff, facet joint, nerve root, SI joint, plantar fascia, ligament, tendon
- **Conditions**: sciatica, radiculopathy, trigger point, bursitis
- **Movement**: dorsiflexion, proprioception
- **Treatment**: joint mobilization

## How to Activate

### Step 1: Update ConditionPageClient.tsx
```tsx
// Add import
import { MedicalGlossaryWrapper, EnhancedParagraph } from '@/components/medical-glossary/MedicalTermProvider';

// Wrap component return
return (
  <MedicalGlossaryWrapper>
    {/* existing content */}
  </MedicalGlossaryWrapper>
);

// Replace paragraphs in overview sections
// Change from:
<p className="text-slate-600 leading-relaxed">
  {condition.pathophysiology}
</p>

// To:
<EnhancedParagraph className="text-slate-600 leading-relaxed">
  {condition.pathophysiology}
</EnhancedParagraph>
```

### Step 2: Add Medical Diagrams
Add images to `/public/images/glossary/`:
- Format: WebP for diagrams, GIF for animations
- Size: 800x600px recommended
- Style: Clean, professional medical illustrations
- See `/public/images/glossary/README.md` for full list

## Features

### Desktop Experience
- Hover over term → See tooltip with definition
- Click term → Open full modal with medical diagrams
- Keyboard navigation (arrows, escape)
- Multiple images per term with gallery navigation

### Mobile Experience
- First tap → Show tooltip
- Second tap → Open full-screen modal
- Touch-optimized interactions
- Full-screen viewing for diagrams

### Design
- Sage green accent (#B08D57) matching site palette
- Subtle dotted underlines for enhanced terms
- Non-intrusive until user shows interest
- Premium modal with smooth animations
- Category badges and pronunciation guides

## Performance Considerations
- Lazy loading for images
- Memoized text processing
- Only highlights first occurrence of each term
- Gracefully handles missing images
- Zero layout shift implementation

## Why It's in Reserve
- User decided feature not needed immediately
- May be activated in future for enhanced patient education
- All code functional and tested
- Ready for immediate deployment when needed

## Testing Checklist (When Activating)
- [ ] Desktop hover interactions work
- [ ] Mobile tap interactions work
- [ ] Modal opens and closes properly
- [ ] Keyboard navigation functional
- [ ] Images load correctly
- [ ] Terms highlight only once per page
- [ ] Performance metrics acceptable
- [ ] Accessibility features working

## Files Involved
```
/components/medical-glossary/
  ├── MedicalTerm.tsx
  ├── MedicalTermProvider.tsx
  ├── TermHighlighter.tsx
  └── VisualReferenceModal.tsx
/lib/
  └── medical-glossary-data.ts
/public/images/glossary/
  └── README.md (image requirements)
```

## Notes
- Build tested successfully with components
- No impact on bundle size when not imported
- Can be selectively enabled per page if needed
- Consider A/B testing when activating