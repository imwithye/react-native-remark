import { BlockContent, DefinitionContent, List, ListItem } from "mdast";
import { Fragment, ReactNode } from "react";
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

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ marginRight: 5 }}>
        {list?.ordered ? (
          <Text style={styles.paragraph}>{itemNumber}.</Text>
        ) : (
          <Text style={styles.paragraph}>•</Text>
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
