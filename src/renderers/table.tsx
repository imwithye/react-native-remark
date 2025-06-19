import { Table, TableCell, TableRow } from "mdast";
import { ReactNode } from "react";
import { ScrollView, Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const TableRenderer = ({ node }: RendererArgs<Table>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { TableRowRenderer } = renderers;

  return (
    <ScrollView horizontal>
      <View>
        {node.children.map((child, idx) => (
          <TableRowRenderer node={child} key={idx} index={idx} parent={node} />
        ))}
      </View>
    </ScrollView>
  );
};

export const TableRowRenderer = ({
  node,
  index,
}: RendererArgs<TableRow>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { TableCellRenderer } = renderers;

  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: index === 0 ? 3 : 1,
        borderColor: styles.borderColor,
      }}
    >
      {node.children.map((child, idx) => (
        <TableCellRenderer
          node={child}
          key={idx}
          index={idx}
          parent={node}
          rowIndex={index ?? 0}
        />
      ))}
    </View>
  );
};

export const TableCellRenderer = ({
  node,
  rowIndex,
}: RendererArgs<TableCell> & { rowIndex: number }): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  const style = mergeStyles(styles.paragraph, {
    fontWeight: rowIndex === 0 ? "bold" : "normal",
  });

  return (
    <View style={{ width: 128, height: 32, justifyContent: "center" }}>
      <Text style={style}>
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
