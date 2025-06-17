import { Text as MdText, Node } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const text = ({
  node,
  index,
}: RendererArgs<MdText, Node>): ReactNode => {
  const value = (node.value || "").replace(/\n/g, " ");
  return <Text key={index}>{value}</Text>;
};
