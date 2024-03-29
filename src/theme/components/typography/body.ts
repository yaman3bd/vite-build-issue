import { VariantProps, tv } from "tailwind-variants";

const body = tv({
  base: "text-black font-normal",
  variants: {
    size: {
      lg: "text-xl",
      base: "text-base",
      //TODO: handle typography body md size
      md: "text-sm font-medium",
      sm: "text-sm",
      caption: "text-xs"
    }
  }
});

export type BodyVariantProps = VariantProps<typeof body>;

export { body };
