import React, {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  createElement,
  forwardRef,
  useMemo
} from "react";

import { TextVariantProps, typography } from "@/theme";

export interface TextProps extends ComponentPropsWithoutRef<any> {
  as?: any;
  className?: string;
  children: React.ReactNode;
  size?: TextVariantProps["size"];
}

const Text = forwardRef<HTMLElement, TextProps>(({ as = "span", size = "md", className, ...props }: TextProps, ref) => {
  const classNames = useMemo(
    () =>
      typography.text({
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
});

type TextComponent<T, P = {}> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
export default Text as TextComponent<HTMLElement, TextProps>;
