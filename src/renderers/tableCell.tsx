import { TableCell } from "mdast";
import { ReactNode } from "react";
import { Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const TableCellRenderer = ({
  node,
}: RendererArgs<TableCell>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  const mergedContainerStyle = mergeStyles(
    {
      height: "100%",
      justifyContent: "center",
    },
    styles.tableCellContainer,
  );

  return (
    <View style={mergedContainerStyle}>
      <Text style={styles.tableCell}>
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
