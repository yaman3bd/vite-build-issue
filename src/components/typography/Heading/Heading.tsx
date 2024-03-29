import React, {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  createElement,
  forwardRef,
  useMemo
} from "react";

import { HeadingVariantProps, typography } from "@/theme";

export interface HeadingProps extends ComponentPropsWithoutRef<any> {
  level?: HeadingVariantProps["level"];
  as?: any;
  className?: string;
  children: React.ReactNode;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h1", level = "h1", className, ...props }: HeadingProps, ref) => {
    const classNames = useMemo(
      () =>
        typography.heading({
          level,
          className
        }),
      [className, level]
    );

    return createElement(as, {
      ref,
      className: classNames,
      ...props
    });
  }
);
type HeadingComponent<T, P = {}> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
export default Heading as HeadingComponent<HTMLElement, HeadingProps>;
