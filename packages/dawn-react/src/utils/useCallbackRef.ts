import { useCallback, useEffect, useRef } from "react";

export const useCallbackRef = <T extends (...args: any[]) => any>(callback: T | undefined): T => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    ((...args) => {
      return callbackRef.current?.(...args);
    }) as T,
    []
  );
};
