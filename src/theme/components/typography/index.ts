import { BodyVariantProps, body } from "./body";
import { HeadingVariantProps, heading } from "./heading";
import { TextVariantProps, text } from "./text";
import { TitleVariantProps, title } from "./title";
import typography from "./typography";

typography.title = title;
typography.heading = heading;
typography.text = text;
typography.body = body;
export type { HeadingVariantProps, BodyVariantProps, TextVariantProps, TitleVariantProps };
export { typography };
