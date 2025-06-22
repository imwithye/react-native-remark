import { BlockContent, DefinitionContent, FootnoteDefinition } from "mdast";
import { Fragment, ReactNode } from "react";
import { Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const FootnoteDefinitionRenderer = ({
  node,
}: RendererArgs<FootnoteDefinition>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { BlockContentRenderer, DefinitionContentRenderer } = renderers;

  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Text style={[styles.paragraph, { textDecorationLine: "underline" }]}>
          [{node.identifier}]:{" "}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
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
    </View>
  );
};
