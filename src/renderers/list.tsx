import { BlockContent, DefinitionContent, List, ListItem } from "mdast";
import { Fragment, ReactNode } from "react";
import { Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const ListRenderer = ({ node }: RendererArgs<List>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { ListItemRenderer } = renderers;

  return (
    <View style={{ gap: 5 }}>
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
  const { renderers } = useMarkdownContext();
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
