import * as React from "react";
import { useAppContext } from "../components/AppProvider";
import { useLayoutEffect } from "./useLayoutEffect";

const useReactId = (React as any)["useId".toString()] || (() => undefined);
let count = 0;

export function useIDPrefix() {
  const context = useAppContext("useID", false);
  let idPrefix = context?.idPrefix;
  if (!context || !idPrefix) {
    idPrefix = "di";
  }
  return idPrefix;
}

export function useID(deterministicId?: string): string {
  const idPrefix = useIDPrefix();

  const [id, setId] = React.useState<string | undefined>(useReactId());
  // React versions older than 18 will have client-side ids only.
  useLayoutEffect(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `${idPrefix}-${id}` : "");
}
