import React, { FC } from "react";

import { Body } from "./Body";
import { Caption } from "./Caption";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Title } from "./Title";

const Typography: FC = () => {
  return null;
};

type TypographyComponent = FC & {
  Heading: typeof Heading;
  Title: typeof Title;
  Text: typeof Text;
  Body: typeof Body;
  Caption: typeof Caption;
};

export default Typography as TypographyComponent;
