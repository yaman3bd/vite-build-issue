import { body } from "./body";
import { heading } from "./heading";
import { text } from "./text";
import { title } from "./title";

const typography = {};

interface TypographyType extends Object {
  heading: typeof heading;
  title: typeof title;
  text: typeof text;
  body: typeof body;
}

export default typography as TypographyType;
