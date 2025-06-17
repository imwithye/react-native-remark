import { List } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { View } from "react-native";
import { useMarkdownContext } from "../context";

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
