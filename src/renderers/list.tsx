import { List } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { View } from "react-native";

export const list = ({
  node,
  renderers,
  definitions,
  index,
}: RendererArgs<List>): ReactNode => {
  return (
    <View key={index} style={{ gap: 5 }}>
      {node.children.map((child, idx) =>
        renderers.listItem({
          node: child,
          index: idx,
          parent: node,
          renderers,
          definitions,
        }),
      )}
    </View>
  );
};
