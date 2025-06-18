import { BlockContent, Blockquote, DefinitionContent } from "mdast";
import { Fragment, ReactNode } from "react";
import { View, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles, themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const BlockquoteRenderer = ({
  node,
}: RendererArgs<Blockquote>): ReactNode => {
  const colorScheme = useColorScheme();
  const { renderers, theme } = useMarkdownContext();
  const { BlockContentRenderer, DefinitionContentRenderer } = renderers;

  const style = mergeStyles(
    themedStyle(theme, colorScheme, "DefaultContainerStyle"),
    themedStyle(theme, colorScheme, "BlockquoteStyle"),
  );

  return (
    <View style={style}>
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
