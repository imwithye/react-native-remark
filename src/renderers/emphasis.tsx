import { Emphasis } from "mdast";
import { ReactNode } from "react";
import { Text, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const EmphasisRenderer = ({
  node,
}: RendererArgs<Emphasis>): ReactNode => {
  const colorScheme = useColorScheme();
  const { renderers, theme } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  return (
    <Text style={themedStyle(theme, colorScheme, "EmphasisStyle")}>
      {node.children.map((child, idx) => (
        <PhrasingContentRenderer
          node={child}
          key={idx}
          index={idx}
          parent={node}
        />
      ))}
    </Text>
  );
};
