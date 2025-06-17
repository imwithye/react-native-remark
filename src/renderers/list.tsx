import { List } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const list = ({
  node,
  renderers,
  index,
}: RendererArgs<List>): ReactNode => {
  return (
    <Text key={index} style={{ fontWeight: "bold" }}>
      {node.children.map((child, idx) =>
        renderers.listItem({
          node: child,
          index: idx,
          parent: node,
          renderers,
        }),
      )}
    </Text>
  );
};
