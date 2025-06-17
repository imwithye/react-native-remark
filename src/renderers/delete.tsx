import { Delete } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const deleteRenderer = ({
  node,
  renderers,
  index,
}: RendererArgs<Delete>): ReactNode => {
  return (
    <Text key={index} style={{ textDecorationLine: "line-through" }}>
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
