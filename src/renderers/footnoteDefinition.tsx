import { BlockContent, DefinitionContent, FootnoteDefinition } from "mdast";
import { Fragment, ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const FootnoteDefinitionRenderer = ({
  node,
}: RendererArgs<FootnoteDefinition>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { BlockContentRenderer, DefinitionContentRenderer } = renderers;

  return (
    <Text style={styles.footnoteDefinition}>
      <Text>[{node.identifier}]: </Text>
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
    </Text>
  );
};
