import { Break } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { View } from "react-native";

export const breakRenderer = ({ index }: RendererArgs<Break>): ReactNode => {
  return <View key={index} />;
};
