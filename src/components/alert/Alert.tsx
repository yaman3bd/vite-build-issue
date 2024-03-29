import React, { ComponentPropsWithoutRef, forwardRef, useEffect, useMemo, useState } from "react";

import { Typography } from "@/components";
import { AlertVariantProps, alert, cn } from "@/theme";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon
} from "@heroicons/react/24/solid";

export interface AlertProps
  extends Omit<ComponentPropsWithoutRef<"div">, keyof AlertVariantProps | "title">,
    AlertVariantProps {
  dismissible?: boolean;
  bordered?: boolean;
  className?: string;
  icon?: React.ReactElement;
  onDismiss?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  show?: boolean;
}

const colorIcons = {
  info: <InformationCircleIcon />,
  gray: <InformationCircleIcon />,
  success: <CheckCircleIcon />,
  danger: <XCircleIcon />,
  warning: <ExclamationTriangleIcon />
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant,
      color,
      children,
      description,
      dismissible,
      bordered = true,
      show: providedShow = true,
      icon,
      title,
      className,
      onDismiss,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(providedShow);

    useEffect(() => {
      setShow(providedShow);
    }, [providedShow]);

    const defaultIcon = colorIcons[color ?? "info"];

    const slots = useMemo(
      () =>
        alert({
          variant,
          color
        }),
      [variant, color]
    );

    return (
      <>
        {show && (
          <div
            className={cn(slots.base({ className }), "abjad-alert", `abjad-alert-${color}`, `abjad-alert-${variant}`)}
            ref={ref}
            role="alert"
            {...props}
          >
            {title && (
              <Typography.Text
                as="h3"
                size="sm"
                children={title}
              />
            )}
            {(description || children) && (
              <div className="col-start-2 flex flex-col">
                {description && (
                  <Typography.Body
                    as="span"
                    size="md"
                    className={cn(children && "mb-4", "text-gray-800")}
                    children={description}
                  />
                )}
                {children}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
);

export default Alert;
