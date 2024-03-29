import React, { ComponentPropsWithoutRef, FC, ReactNode, createElement, useMemo } from "react";

import { BadgeVariantProps, badge, cn, typography } from "@/theme";

import { BadgeGroup } from "./components";

export interface BadgeProps extends Omit<ComponentPropsWithoutRef<"div">, keyof BadgeVariantProps>, BadgeVariantProps {
  as?: "button" | "a" | "div";
  className?: string;
  children: ReactNode;
  icon?: React.ReactElement;
  iconAlign?: "start" | "end";
}

const Badge: FC<BadgeProps> = ({
  as = "div",
  iconAlign = "start",
  size,
  variant,
  color,
  rounded,
  icon,
  children,
  className,
  ...props
}: BadgeProps) => {
  const badgeClassNames = useMemo(
    () =>
      typography.body({
        size: "sm",
        className: badge({ size, variant, color, rounded, className })
      }),
    [size, variant, rounded, color, className]
  );

  return createElement(as, {
    className: cn(badgeClassNames, "abjad-badge", `abjad-badge-${variant}`, `abjad-badge-${color}`),
    children: (
      <>
        {iconAlign == "start" && icon && <span children={icon} />}

        {children}

        {iconAlign == "end" && icon && <span children={icon} />}
      </>
    ),
    ...props
  });
};

type Badge<P = {}> = FC<P> & {
  Group: typeof BadgeGroup;
};

export default Badge as Badge<BadgeProps>;
