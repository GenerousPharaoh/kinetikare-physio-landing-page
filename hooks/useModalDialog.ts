'use client';

import { useEffect, useRef, type RefObject } from 'react';

/** One focus/scroll model for the navigation drawer and site search. */
export function useModalDialog(
  open: boolean,
  panelRef: RefObject<HTMLElement | null>,
  onClose: () => void,
  initialFocusRef?: RefObject<HTMLElement | null>
) {
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!open || !panel) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Inert all branches outside the dialog, including the header and footer.
    // Preserve existing values so closing a dialog never enables hidden UI.
    const outside: Array<[HTMLElement, boolean]> = [];
    let branch: HTMLElement = panel;
    while (branch.parentElement) {
      for (const sibling of Array.from(branch.parentElement.children)) {
        if (
          sibling instanceof HTMLElement &&
          sibling !== branch &&
          sibling.tagName !== 'SCRIPT' &&
          !sibling.hasAttribute('data-dialog-backdrop')
        ) {
          outside.push([sibling, sibling.inert]);
          sibling.inert = true;
        }
      }
      if (branch.parentElement === document.body) break;
      branch = branch.parentElement;
    }

    const focusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.getClientRects().length > 0 && !el.closest('[inert]'));
    const frame = requestAnimationFrame(() =>
      (initialFocusRef?.current ?? focusable()[0] ?? panel).focus()
    );
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      const first = items[0] ?? panel;
      const last = items[items.length - 1] ?? panel;
      if (
        event.shiftKey &&
        (document.activeElement === first || !panel.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last || !panel.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKeyDown);
      for (const [element, wasInert] of outside) element.inert = wasInert;
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected && !previousFocus.closest('[inert]'))
        previousFocus.focus({ preventScroll: true });
    };
  }, [open, panelRef, initialFocusRef]);
}
