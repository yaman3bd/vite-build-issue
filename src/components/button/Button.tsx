import React, { ReactNode, forwardRef, isValidElement, useCallback, useMemo } from "react";

import {
  ButtonRenderProps,
  LinkRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
  Link as RACLink,
  LinkProps as RACLinkProps,
  composeRenderProps
} from "react-aria-components";


import { ButtonVariantProps, button } from "@/theme";

export type ButtonProps = (RACButtonProps | RACLinkProps) &
  Omit<ButtonVariantProps, "isDisabled" | "onlyIcon" | "isFocusVisible"> & {
    icon?: React.ReactElement;
    iconAlign?: "start" | "end";
  };

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ icon, iconAlign = "start", variant = "solid", color = "primary", isLoading, isFetching, ...props }, ref) => {
    const onlyIcon = useMemo(() => !props.children && isValidElement(icon), [props.children, icon]);

    const renderChildren = useCallback(
      (children: ReactNode) => {
        const ch =
          children &&
          (isLoading || isFetching ? (
            <span
              data-slot="children"
              style={{
                visibility: "hidden"
              }}
              children={children}
            />
          ) : (
            children
          ));

        const content = !icon ? (
          ch
        ) : (
          <>
            {iconAlign == "start" && icon}
            {ch}
            {iconAlign == "end" && icon}
          </>
        );
        return (
          <>
            {content}
            {isLoading && <span className="absolute-center" />}
            {isFetching && (
              <span
                className="absolute-center abjad-skeleton w-full"
                style={{ padding: "inherit" }}
                children={<span className="h-2 w-full animate-pulse rounded-3xl bg-black bg-opacity-20" />}
              />
            )}
          </>
        );
      },
      [isLoading, isFetching, icon, iconAlign]
    );

    const generateClassName = useCallback(
      (className: string | undefined, renderProps: ButtonRenderProps | LinkRenderProps) =>
        button({
          ...renderProps,
          variant: variant,
          color: color,
          rounded: props.rounded,
          isDisabled: props.isDisabled,
          size: props.size,
          isFetching,
          isLoading,
          onlyIcon,
          className: [className, "abjad-btn", `abjad-btn-${variant}`, `abjad-btn-${color}`]
        }),
      [variant, color, props.rounded, props.isDisabled, props.size, isFetching, isLoading, onlyIcon]
    );

    if ("href" in props) {
      return (
        <RACLink
          {...(props as RACLinkProps)}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          isDisabled={props.isDisabled || isLoading || isFetching}
          className={composeRenderProps((props as RACLinkProps).className, generateClassName)}
          children={composeRenderProps((props as RACLinkProps).children, renderChildren)}
        />
      );
    } else {
      return (
        <RACButton
          {...(props as RACButtonProps)}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          isDisabled={props.isDisabled || isLoading || isFetching}
          className={composeRenderProps((props as RACButtonProps).className, (c, r) =>
            generateClassName(c ? `${c} cursor-default` : "cursor-default", r)
          )}
          children={composeRenderProps((props as RACButtonProps).children, renderChildren)}
        />
      );
    }
  }
);

Button.displayName = "Button";

export default Button;
