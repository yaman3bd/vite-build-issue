import { VariantProps, tv } from "tailwind-variants";

const title = tv({
  base: "text-black",
  variants: {
    size: {
      lg: "text-3.5xl",
      md: "text-2.5xl",
      sm: "text-2xl"
    }
  },
  compoundVariants: [
    {
      size: "lg",
      class: "font-semibold"
    },
    {
      size: "md",
      class: "font-semibold"
    },
    {
      size: "sm",
      class: "font-medium"
    }
  ]
});

export type TitleVariantProps = VariantProps<typeof title>;

export { title };
