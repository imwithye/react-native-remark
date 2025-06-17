import { Text as MdText } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { RendererArgs } from "./renderers";

export const text = ({ node, index }: RendererArgs<MdText>): ReactNode => {
  const value = (node.value || "").replace(/\n/g, " ");
  return <Text key={index}>{value}</Text>;
};
