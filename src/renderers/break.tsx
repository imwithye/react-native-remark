import { Break } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { RendererArgs } from "./renderers";

export const breakRenderer = ({ index }: RendererArgs<Break>): ReactNode => {
  return <View key={index} />;
};
