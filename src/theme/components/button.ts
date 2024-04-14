import { VariantProps, tv } from "tailwind-variants";

import { focusRing } from "@/theme/utils";

const button = tv({
  extend: focusRing,
  base: [
    "relative inline-flex items-center justify-center transition gap-x-2 font-medium",
    "[&.abjad-btn-is-fetching_[data-slot=icon]]:invisible [&.abjad-btn-is-fetching>[data-slot=children]]:invisible",
    "[&.abjad-btn-is-loading_[data-slot=icon]]:invisible [&.abjad-btn-is-loading>[data-slot=children]]:invisible"
  ],
  variants: {
    variant: {
      solid: "",
      outline: "border-1.5",
      link: ""
    },
    color: {
      primary: "text-white",
      secondary: "text-white",
      warning: "text-white",
      success: "text-white",
      danger: "text-white",
      info: "text-white",
      gray: "text-gray-900",
      gradient: "text-white bg-gradient-custom hover:bg-gradient-custom-hover focus-visible:ring-gradient-custom"
    },
    size: {
      sm: "px-3 py-1.5 h-10",
      md: "px-4 py-2.5 h-12",
      lg: "px-6 py-3.5 h-14"
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
      full: "rounded-full"
    },
    isDisabled: {
      true: "opacity-30 pointer-events-none"
    },
    isFetching: {
      true: "pointer-events-none abjad-btn-is-fetching"
    },
    isLoading: {
      true: "pointer-events-none abjad-btn-is-loading"
    },
    onlyIcon: {
      true: "gap-x-0"
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "md",
    disabled: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      class: "bg-primary hover:bg-primary-600 pressed:bg-primary-700"
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-secondary hover:bg-secondary-600 pressed:bg-secondary-700"
    },
    {
      variant: "solid",
      color: "warning",
      class: "bg-warning hover:bg-warning-600 pressed:bg-warning-700"
    },
    {
      variant: "solid",
      color: "success",
      class: "bg-success hover:bg-success-600 pressed:bg-success-700"
    },
    {
      variant: "solid",
      color: "danger",
      class: "bg-danger hover:bg-danger-600 pressed:bg-danger-700"
    },
    {
      variant: "solid",
      color: "info",
      class: "bg-info hover:bg-info-600 pressed:bg-info-700"
    },
    {
      variant: "solid",
      color: "gray",
      class: "bg-gray-400 hover:bg-gray pressed:ring-1 pressed:ring-gray"
    },
    {
      variant: "outline",
      color: "primary",
      class: "text-primary border-primary hover:border-primary-600 pressed:border-primary-700"
    },
    {
      variant: "outline",
      color: "secondary",
      class: "text-secondary border-secondary hover:border-secondary-600 pressed:border-secondary-700"
    },
    {
      variant: "outline",
      color: "warning",
      class: "text-warning border-warning hover:border-warning-600 pressed:border-warning-700"
    },
    {
      variant: "outline",
      color: "success",
      class: "text-success border-success hover:border-success-600 pressed:border-success-700"
    },
    {
      variant: "outline",
      color: "danger",
      class: "text-danger border-danger hover:border-danger-600 pressed:border-danger-700"
    },
    {
      variant: "outline",
      color: "info",
      class: "text-info border-info hover:border-info-600 pressed:border-info-700"
    },
    {
      variant: "outline",
      color: "gray",
      class: "border-gray-400 hover:border-gray pressed:border-gray"
    },
    //link
    {
      variant: "link",
      color: "primary",
      class: "text-primary hover:text-primary-600 pressed:text-primary-700"
    },
    {
      variant: "link",
      color: "secondary",
      class: "text-secondary hover:text-secondary-600 pressed:text-secondary-700"
    },
    {
      variant: "link",
      color: "warning",
      class: "text-warning hover:text-warning-600 pressed:text-warning-700"
    },
    {
      variant: "link",
      color: "success",
      class: "text-success hover:text-success-600 pressed:text-success-700"
    },
    {
      variant: "link",
      color: "danger",
      class: "text-danger hover:text-danger-600 pressed:text-danger-700"
    },
    {
      variant: "link",
      color: "info",
      class: "text-info hover:text-info-600 pressed:text-info-700"
    },
    {
      variant: "link",
      color: "gray",
      class: []
    },
    //onlyIcon / size
    {
      onlyIcon: true,
      size: "sm",
      class: "p-2"
    },
    {
      onlyIcon: true,
      size: "md",
      class: "p-3"
    },
    {
      onlyIcon: true,
      size: "lg",
      class: "p-4"
    }
  ]
});

export type ButtonVariantProps = VariantProps<typeof button>;
export { button };
