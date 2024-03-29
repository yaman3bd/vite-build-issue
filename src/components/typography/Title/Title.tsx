import React, {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  createElement,
  forwardRef,
  useMemo
} from "react";

import { TitleVariantProps, typography } from "@/theme";

export interface TitleProps extends ComponentPropsWithoutRef<any> {
  as?: any;
  size?: TitleVariantProps["size"];
  className?: string;
  children: React.ReactNode;
}

const Title = forwardRef<HTMLElement, TitleProps>(
  ({ as = "div", size = "md", className, ...props }: TitleProps, ref) => {
    const classNames = useMemo(
      () =>
        typography.title({
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

type TitleComponent<T, P = {}> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
export default Title as TitleComponent<HTMLElement, TitleProps>;
