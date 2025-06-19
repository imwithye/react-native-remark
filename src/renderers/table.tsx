import { Table, TableCell, TableRow } from "mdast";
import { ReactNode } from "react";
import { ScrollView, Text, View } from "react-native";

import { useMarkdownContext } from "../context";
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
  const { renderers } = useMarkdownContext();
  const { TableCellRenderer } = renderers;

  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: index === 0 ? 3 : 1,
        borderColor: "#eeeeee",
      }}
    >
      {node.children.map((child, idx) => (
        <TableCellRenderer node={child} key={idx} index={idx} parent={node} />
      ))}
    </View>
  );
};

export const TableCellRenderer = ({
  node,
}: RendererArgs<TableCell>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  return (
    <View style={{ width: 128, height: 32, justifyContent: "center" }}>
      <Text style={styles.paragraph}>
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
