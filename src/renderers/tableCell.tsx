import { TableCell } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const TableCellRenderer = ({
  node,
}: RendererArgs<TableCell>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 4,
        paddingVertical: 2,
        minWidth: 64,
        maxWidth: 128,
        alignItems: "flex-start",
      }}
    >
      {node.children.map((child, idx) => (
        <PhrasingContentRenderer
          node={child}
          key={idx}
          index={idx}
          parent={node}
        />
      ))}
    </View>
  );
};
