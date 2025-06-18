import { Heading } from "mdast";
import { ReactNode } from "react";
import { Text, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const HeadingRenderer = ({ node }: RendererArgs<Heading>): ReactNode => {
  const colorScheme = useColorScheme();
  const { renderers, theme } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  return (
    <Text style={themedStyle(theme, colorScheme, "HeadingStyle")(node.depth)}>
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
