import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const alert = tv({
  slots: {
    base: "rounded-xl p-4 grid grid-cols-[min-content_1fr] items-center gap-x-3 gap-y-2 relative",
    icon: ""
  },
  variants: {
    variant: {
      soft: "",
      solid: "",
      gradient: {
        base: "gradient",
        icon: "text-default-to"
      }
    },
    color: {
      info: "",
      success: "",
      warning: "",
      danger: "",
      gray: ""
    }
  },
  compoundVariants: [
    // solid
    {
      variant: "solid",
      color: "info",
      class: {
        base: "border border-gray-200 bg-white",
        icon: "text-info"
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "border border-gray-200 bg-white",
        icon: "text-success"
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "border border-gray-200 bg-white",
        icon: "text-warning"
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: "border border-gray-200 bg-white",
        icon: "text-danger"
      }
    },
    {
      variant: "solid",
      color: "gray",
      class: {
        base: "border border-gray-200 bg-white",
        icon: "text-gray"
      }
    },
    //soft
    {
      variant: "soft",
      color: "warning",
      class: {
        base: "border border-warning bg-warning-50",
        icon: "text-warning"
      }
    },
    {
      variant: "soft",
      color: "success",
      class: {
        base: "border border-success bg-success-50",
        icon: "text-success"
      }
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        base: "border border-danger bg-danger-50",
        icon: "text-danger"
      }
    },
    {
      variant: "soft",
      color: "info",
      class: {
        base: "border border-info bg-info-50",
        icon: "text-info"
      }
    },
    {
      variant: "soft",
      color: "gray",
      class: {
        base: "border border-gray-950 bg-black/[0.02]",
        icon: "text-gray-950"
      }
    }
  ],
  defaultVariants: {
    variant: "soft",
    color: "info"
  }
});

export type AlertVariantProps = VariantProps<typeof alert>;

export { alert };
