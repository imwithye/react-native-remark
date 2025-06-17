import { Delete } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const deleteRenderer = ({
  node,
  index,
}: RendererArgs<Delete>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <Text key={index} style={{ textDecorationLine: "line-through" }}>
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
