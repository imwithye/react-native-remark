import { TableRow } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const TableRowRenderer = ({
  node,
}: RendererArgs<TableRow>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { TableCellRenderer } = renderers;

  const style = mergeStyles(styles.tableRow, {
    flexDirection: "row",
  });

  return (
    <View style={style}>
      {node.children.map((child, idx) => (
        <TableCellRenderer node={child} key={idx} index={idx} parent={node} />
      ))}
    </View>
  );
};
