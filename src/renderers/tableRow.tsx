import { TableRow } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const TableRowRenderer = ({
  node,
}: RendererArgs<TableRow>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { TableCellRenderer } = renderers;

  return (
    <View
      style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "red" }}
    >
      {node.children.map((child, idx) => (
        <TableCellRenderer node={child} key={idx} index={idx} parent={node} />
      ))}
    </View>
  );
};
