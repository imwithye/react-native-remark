import { BlockContent, Blockquote, DefinitionContent } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const blockquote = ({
  node,
  index,
}: RendererArgs<Blockquote>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <View
      key={index}
      style={{
        borderLeftWidth: 3,
        borderLeftColor: "#eeeeee",
        backgroundColor: "#f5f5f5",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        gap: 5,
      }}
    >
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
  );
};
