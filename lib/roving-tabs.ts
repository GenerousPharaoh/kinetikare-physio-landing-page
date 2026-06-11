import type { KeyboardEvent } from 'react';

/**
 * Roving-tabindex keyboard handler for a WAI-ARIA tablist that uses automatic
 * activation (selection follows focus). Attach to every element with
 * role="tab" via onKeyDown. ArrowLeft / ArrowRight move focus to the adjacent
 * tab (wrapping), Home / End jump to the first / last tab, and the newly
 * focused tab is activated by re-dispatching its own click handler so each
 * tablist's existing onClick logic stays the single source of truth.
 */
export function handleRovingTabKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
  const navigationKeys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
  if (!navigationKeys.includes(e.key)) return;

  const tabs = Array.from(
    e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? []
  );
  const currentIndex = tabs.indexOf(e.currentTarget);
  if (currentIndex === -1) return;

  e.preventDefault();

  let nextIndex = currentIndex;
  switch (e.key) {
    case 'ArrowRight':
      nextIndex = (currentIndex + 1) % tabs.length;
      break;
    case 'ArrowLeft':
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      break;
    case 'Home':
      nextIndex = 0;
      break;
    case 'End':
      nextIndex = tabs.length - 1;
      break;
  }

  const nextTab = tabs[nextIndex];
  if (!nextTab) return;
  nextTab.focus();
  nextTab.click();
}
