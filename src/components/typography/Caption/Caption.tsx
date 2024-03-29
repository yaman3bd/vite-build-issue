import React, {
  ForwardRefExoticComponent,
  ForwardedRef,
  HTMLProps,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
  forwardRef,
  useMemo
} from "react";

import { typography } from "@/theme";

export interface CaptionProps extends HTMLProps<HTMLSpanElement> {
  className?: string;
  children: ReactNode;
}

const Caption = forwardRef(({ className, ...props }: CaptionProps, ref: ForwardedRef<HTMLSpanElement>) => {
  const classNames = useMemo(
    () =>
      typography.body({
        size: "caption",
        className
      }),
    [className]
  );
  return (
    <span
      ref={ref}
      className={classNames}
      {...props}
    />
  );
});
type CaptionComponent<T, P = {}> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

export default Caption as CaptionComponent<HTMLSpanElement, CaptionProps>;
