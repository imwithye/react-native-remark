import { Heading } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const heading = ({ node, index }: RendererArgs<Heading>): ReactNode => {
  const { renderers } = useMarkdownContext();

  const depth = node.depth;
  const fontSize = 32 - depth * 2;
  const fontWeight = depth <= 3 ? "bold" : "semibold";

  return (
    <Text key={index} style={{ fontSize, fontWeight }}>
      {node.children.map((child, idx) =>
        renderers.phrasingContent({
          node: child,
          index: idx,
          parent: node,
        }),
      )}
    </Text>
  );
};
