/**
 * Fork of `@radix-ui/primitive
 * @link {https://github.com/radix-ui/primitives/blob/b324ec2d7ddf13a2a115cb5b11478e24d2f45b87/packages/core/primitive/src/primitive.tsx}
 */
export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
