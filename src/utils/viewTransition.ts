import { flushSync } from "react-dom";

export function makeTransition(transition: () => void) {
  // Check if the browser supports the view transitions API
  // if not, just call the transition
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(() => {
        transition();
      });
    });
  } else {
    transition();
  }
}