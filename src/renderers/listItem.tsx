import { BlockContent, DefinitionContent, List, ListItem } from "mdast";
import { ReactNode } from "react";
import { Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const listItem = ({
  node,
  index,
  parent,
}: RendererArgs<ListItem>): ReactNode => {
  const { renderers } = useMarkdownContext();

  const list = parent?.type === "list" ? (parent as List) : null;
  const itemId = (list?.start ?? 1) + (index ?? 0);
  return (
    <View key={index} style={{ flexDirection: "row" }}>
      {list?.ordered ? (
        <Text style={{ marginRight: 5 }}>{itemId}.</Text>
      ) : (
        <Text style={{ marginRight: 5 }}>•</Text>
      )}
      <View style={{ flex: 1 }}>
        {node.children.map(
          (child, idx) =>
            renderers.blockContent({
              node: child as BlockContent,
              index: idx,
              parent: node,
            }) ||
            renderers.definitionContent({
              node: child as DefinitionContent,
              index: idx,
              parent: node,
            }),
        )}
      </View>
    </View>
  );
};
