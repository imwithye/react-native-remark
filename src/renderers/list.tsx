import { List } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const list = ({ node, index }: RendererArgs<List>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <View key={index} style={{ gap: 5 }}>
      {node.children.map((child, idx) =>
        renderers.listItem({
          node: child,
          index: idx,
          parent: node,
        }),
      )}
    </View>
  );
};
