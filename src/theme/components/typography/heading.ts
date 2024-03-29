import { VariantProps, tv } from "tailwind-variants";

const heading = tv({
  base: "text-black font-bold",
  variants: {
    level: {
      h1: "text-6.5xl",
      h2: "text-5.5xl",
      h3: "text-5xl",
      h4: "text-4.5xl",
      h5: "text-4xl"
    }
  }
});
export type HeadingVariantProps = VariantProps<typeof heading>;

export { heading };
