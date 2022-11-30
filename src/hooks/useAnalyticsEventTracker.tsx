import { useCallback } from "react";
import ReactGA from "react-ga";

// ----------------------------------------------------------------------

export default function useAnalyticsEventTracker({
  category,
  action,
  label,
  value,
}: any) {
  return useCallback(
    (event: any) => {
      ReactGA.event({
        category,
        action,
        label,
        value,
        ...event,
      });
    },
    [category, action, label, value]
  );
}
