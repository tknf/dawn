import * as React from "react";
import { composeRefs } from "../../utils";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Fork of `@radix-ui/slot
 * @link {https://github.com/radix-ui/primitives/blob/main/packages/react/slot/src/Slot.tsx}
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>((props, ref) => {
  const { children, ...slotProps } = props;
  const childrenArray = React.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);

  if (slottable) {
    const newEl = slottable.props.children as React.ReactNode;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React.Children.count(newEl) > 1) {
          return React.Children.only(null);
        }
        return React.isValidElement(newEl) ? (newEl.props.children as React.ReactNode) : null;
      }
      return child;
    });

    return (
      <SlotClone {...slotProps} ref={ref}>
        {React.isValidElement(newEl) ? React.cloneElement(newEl, undefined, newChildren) : null}
      </SlotClone>
    );
  }

  return (
    <SlotClone {...slotProps} ref={ref}>
      {children}
    </SlotClone>
  );
});

interface SlotCloneProps {
  children: React.ReactNode;
}

const SlotClone = React.forwardRef<any, SlotCloneProps>((props, ref) => {
  const { children, ...slotProps } = props;

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      ref: composeRefs(ref, (children as any).ref)
    });
  }

  return React.Children.count(children) > 1 ? React.Children.only(null) : null;
});

/**
 * Fork of `@radix-ui/slot
 * @link {https://github.com/radix-ui/primitives/blob/main/packages/react/slot/src/Slot.tsx}
 */
export const Slottable = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

type AnyProps = Record<string, any>;

function isSlottable(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child) && child.type === Slottable;
}

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  // all child props should override
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    // if it's a handler, modify the override by composing the base handler
    if (isHandler) {
      overrideProps[propName] = (...args: unknown[]) => {
        childPropValue?.(...args);
        slotPropValue?.(...args);
      };
    }
    // if it's `style`, we merge them
    else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }

  return { ...slotProps, ...overrideProps };
}
