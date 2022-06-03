import * as React from "react";

type PossibleRef<T> = React.Ref<T> | undefined;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

/**
 * Fork of `@radix-ui/compose-refs
 * @link {https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/composeRefs.tsx}
 */
export function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

/**
 * Fork of `@radix-ui/compose-refs
 * @link {https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/composeRefs.tsx}
 */
export function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(composeRefs(...refs), refs);
}
