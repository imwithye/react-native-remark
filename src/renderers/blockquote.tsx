import { BlockContent, Blockquote, DefinitionContent } from "mdast";
import { Fragment, ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const BlockquoteRenderer = ({
  node,
}: RendererArgs<Blockquote>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { BlockContentRenderer, DefinitionContentRenderer } = renderers;

  return (
    <View
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
      {node.children.map((child, idx) => (
        <Fragment key={idx}>
          <BlockContentRenderer
            node={child as BlockContent}
            index={idx}
            parent={node}
          />
          <DefinitionContentRenderer
            node={child as DefinitionContent}
            index={idx}
            parent={node}
          />
        </Fragment>
      ))}
    </View>
  );
};
