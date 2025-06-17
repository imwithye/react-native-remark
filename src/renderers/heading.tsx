import { Heading } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const heading = ({
  node,
  renderers,
  index,
}: RendererArgs<Heading>): ReactNode => {
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
          renderers,
        }),
      )}
    </Text>
  );
};
