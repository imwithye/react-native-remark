import { Text as MdText } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { RendererArgs } from "./renderers";

export const TextRenderer = ({ node }: RendererArgs<MdText>): ReactNode => {
  const value = (node.value || "").replace(/\n/g, " ");
  if (!value) return null;
  return <Text>{value}</Text>;
};
