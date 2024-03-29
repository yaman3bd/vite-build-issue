import React, {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
  createElement,
  forwardRef,
  useMemo
} from "react";

import { BodyVariantProps, typography } from "@/theme";

export interface BodyProps extends ComponentPropsWithoutRef<any> {
  as?: "p" | "span";
  className?: string;
  children: ReactNode;
  size?: BodyVariantProps["size"];
}

const Body = forwardRef(
  ({ as = "span", size = "md", className, ...props }: BodyProps, ref: ForwardedRef<HTMLElement>) => {
    const classNames = useMemo(
      () =>
        typography.body({
          size,
          className
        }),
      [className, size]
    );
    return createElement(as, {
      ref,
      className: classNames,
      ...props
    });
  }
);
type BodyComponent<T, P = {}> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

export default Body as BodyComponent<HTMLElement, BodyProps>;
