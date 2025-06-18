import { List } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

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
