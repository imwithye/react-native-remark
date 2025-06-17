import { BlockContent, DefinitionContent, List, ListItem } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text, View } from "react-native";

export const listItem = ({
  node,
  renderers,
  definitions,
  index,
  parent,
}: RendererArgs<ListItem>): ReactNode => {
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
              renderers,
              definitions,
            }) ||
            renderers.definitionContent({
              node: child as DefinitionContent,
              index: idx,
              parent: node,
              renderers,
              definitions,
            }),
        )}
      </View>
    </View>
  );
};
