import { TableCell } from "mdast";
import { ReactNode } from "react";
import { Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const TableCellRenderer = ({
  node,
  rowIndex,
  colIndex,
}: RendererArgs<TableCell> & {
  rowIndex: number;
  colIndex: number;
}): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  const mergedContainerStyle = mergeStyles(
    {
      height: "100%",
      justifyContent: "center",
    },
    styles.tableCellContainer?.(rowIndex, colIndex),
  );

  return (
    <View style={mergedContainerStyle}>
      <Text style={styles.tableCell?.(rowIndex, colIndex)}>
        {node.children.map((child, idx) => (
          <PhrasingContentRenderer
            node={child}
            key={idx}
            index={idx}
            parent={node}
          />
        ))}
      </Text>
    </View>
  );
};
