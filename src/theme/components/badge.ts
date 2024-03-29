import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const badge = tv({
  base: "inline-flex items-center transition-colors gap-2",
  variants: {
    size: {
      md: "px-3 py-1",
      sm: "px-1.5 py-px"
    },
    variant: {
      solid: "",
      soft: "",
      outline: ""
    },
    color: {
      primary: "",
      secondary: "",
      warning: "",
      success: "",
      danger: "",
      info: "",
      gray: "",
      purple: ""
    },
    rounded: {
      none: "rounded-none",
      base: "rounded-md",
      full: "rounded-full"
    }
  },
  compoundVariants: [
    // Solid
    {
      variant: "solid",
      color: "primary",
      class: "text-white bg-primary"
    },
    {
      variant: "solid",
      color: "secondary",
      class: "text-white bg-secondary"
    },
    {
      variant: "solid",
      color: "warning",
      class: "text-white bg-warning"
    },
    {
      variant: "solid",
      color: "success",
      class: "text-white bg-success"
    },
    {
      variant: "solid",
      color: "danger",
      class: "text-white bg-danger"
    },
    {
      variant: "solid",
      color: "info",
      class: "text-white bg-info"
    },
    {
      variant: "solid",
      color: "gray",
      class: "text-white bg-gray-900"
    },
    {
      variant: "solid",
      color: "purple",
      class: "text-white bg-purple"
    },
    // Soft
    {
      variant: "soft",
      color: "primary",
      class: "text-primary bg-primary/10"
    },
    {
      variant: "soft",
      color: "secondary",
      class: "text-secondary bg-secondary/10"
    },
    {
      variant: "soft",
      color: "warning",
      class: "text-warning bg-warning/10"
    },
    {
      variant: "soft",
      color: "success",
      class: "text-success bg-success/10"
    },
    {
      variant: "soft",
      color: "danger",
      class: "text-danger bg-danger/10"
    },
    {
      variant: "soft",
      color: "info",
      class: "text-info bg-info/10"
    },
    {
      variant: "soft",
      color: "gray",
      class: "text-gray-800 bg-gray-300"
    },
    {
      variant: "soft",
      color: "purple",
      class: "text-purple bg-purple/10"
    },
    // Outline
    {
      variant: "outline",
      color: "primary",
      class: "text-primary border-1.5 border-primary"
    },
    {
      variant: "outline",
      color: "secondary",
      class: "text-secondary border-1.5 border-secondary"
    },
    {
      variant: "outline",
      color: "warning",
      class: "text-warning border-1.5 border-warning"
    },
    {
      variant: "outline",
      color: "success",
      class: "text-success border-1.5 border-success"
    },
    {
      variant: "outline",
      color: "danger",
      class: "text-danger border-1.5 border-danger"
    },
    {
      variant: "outline",
      color: "info",
      class: "text-info border-1.5 border-info"
    },
    {
      variant: "outline",
      color: "gray",
      class: "text-gray-800 border-1.5 border-gray-400"
    },
    {
      variant: "outline",
      color: "purple",
      class: "text-purple border-1.5 border-purple"
    }
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "base"
  }
});

export type BadgeVariantProps = VariantProps<typeof badge>;

export { badge };
