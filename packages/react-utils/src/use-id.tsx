import * as React from "react";
import { useLayoutEffect } from "./use-layout-effect";

const useReactId = (React as any)["useId".toString()] || (() => undefined);
let count = 0;

function useID(deterministicId?: string): string {
  const [id, setId] = React.useState<string | undefined>(useReactId());
  // React versions older than 18 will have client-side ids only.
  useLayoutEffect(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `tknf-ui-${id}` : "");
}

export { useID };
