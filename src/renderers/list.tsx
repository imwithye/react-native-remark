import { BlockContent, DefinitionContent, List, ListItem } from "mdast";
import { Fragment, ReactNode } from "react";
import { Text, View, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles, themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const ListRenderer = ({ node }: RendererArgs<List>): ReactNode => {
  const colorScheme = useColorScheme();
  const { renderers, theme } = useMarkdownContext();
  const { ListItemRenderer } = renderers;

  const style = mergeStyles(
    themedStyle(theme, colorScheme, "DefaultContainerStyle"),
    themedStyle(theme, colorScheme, "ListStyle"),
  );

  return (
    <View style={style}>
      {node.children.map((child, idx) => (
        <ListItemRenderer node={child} key={idx} index={idx} parent={node} />
      ))}
    </View>
  );
};

export const ListItemRenderer = ({
  node,
  index,
  parent,
}: RendererArgs<ListItem>): ReactNode => {
  const colorScheme = useColorScheme();
  const { renderers, theme } = useMarkdownContext();
  const { BlockContentRenderer, DefinitionContentRenderer } = renderers;

  const list = parent?.type === "list" ? (parent as List) : null;
  const itemId = (list?.start ?? 1) + (index ?? 0);

  return (
    <View style={{ flexDirection: "row" }}>
      {list?.ordered ? (
        <Text style={{ marginRight: 5 }}>{itemId}.</Text>
      ) : (
        <Text style={{ marginRight: 5 }}>•</Text>
      )}
      <View style={themedStyle(theme, colorScheme, "DefaultContainerStyle")}>
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
