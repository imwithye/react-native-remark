import { InlineCode } from "mdast";
import { ReactNode } from "react";
import { Text, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const InlineCodeRenderer = ({
  node,
}: RendererArgs<InlineCode>): ReactNode => {
  const colorScheme = useColorScheme();
  const { theme } = useMarkdownContext();

  return (
    <Text style={themedStyle(theme, colorScheme, "InlineCodeStyle")}>
      {node.value}
    </Text>
  );
};
