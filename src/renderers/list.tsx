import { BlockContent, DefinitionContent, List, ListItem } from "mdast";
import { Fragment, ReactNode, useMemo } from "react";
import { Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const ListRenderer = ({ node }: RendererArgs<List>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { ListItemRenderer } = renderers;

  const style = mergeStyles(styles.container, styles.list);

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
  const { renderers, styles } = useMarkdownContext();
  const { BlockContentRenderer, DefinitionContentRenderer } = renderers;

  const list = parent?.type === "list" ? (parent as List) : null;
  const itemNumber = (list?.start ?? 1) + (index ?? 0);

  const markerStyle = useMemo(() => {
    const defaultStyle = mergeStyles(styles.paragraph, {
      fontWeight: "500",
    });
    const firstItem = list?.children?.[0].children?.[0];
    if (!firstItem) return defaultStyle;
    if (firstItem.type === "heading") {
      return styles.heading?.(firstItem.depth);
    }
    return defaultStyle;
  }, [styles, list]);

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ marginRight: 5 }}>
        {list?.ordered ? (
          <Text style={markerStyle}>{itemNumber}.</Text>
        ) : (
          <Text style={markerStyle}>•</Text>
        )}
      </View>
      <View style={styles.listItem}>
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
