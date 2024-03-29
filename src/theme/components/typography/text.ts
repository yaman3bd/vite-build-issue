import { VariantProps, tv } from "tailwind-variants";

const text = tv({
  base: "text-black",
  variants: {
    size: {
      lg: "text-2xl",
      md: "text-xl",
      sm: "text-base",
      xs: "text-sm"
    }
  },
  compoundVariants: [
    {
      size: "lg",
      class: "font-medium"
    },
    {
      size: "md",
      class: "font-medium"
    },
    {
      size: "sm",
      class: "font-medium"
    },
    {
      size: "xs",
      class: "font-medium"
    }
  ]
});
export type TextVariantProps = VariantProps<typeof text>;

export { text };
