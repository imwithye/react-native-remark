import { Text as MdText } from "mdast";
import { ReactNode } from "react";
import { Text, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const TextRenderer = ({ node }: RendererArgs<MdText>): ReactNode => {
  const colorScheme = useColorScheme();
  const { theme } = useMarkdownContext();

  const value = (node.value || "").replace(/\n/g, " ");
  if (!value) return null;
  return (
    <Text style={themedStyle(theme, colorScheme, "TextStyle")}>{value}</Text>
  );
};
