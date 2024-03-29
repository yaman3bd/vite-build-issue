import React, { FC, ReactNode } from "react";

import { cn } from "@/theme";

export interface BadgeGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const BadgeGroup = ({ children, className, ...props }: BadgeGroupProps) => (
  <div
    className={cn("flex flex-wrap items-center gap-2", className)}
    children={children}
    {...props}
  />
);

type BadgeGroup<P = {}> = FC<P> & {};

export default BadgeGroup as BadgeGroup<BadgeGroupProps>;
