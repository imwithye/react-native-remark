import { Table } from "mdast";
import { ReactNode } from "react";
import { ScrollView, View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const TableRenderer = ({ node }: RendererArgs<Table>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { TableRowRenderer } = renderers;

  return (
    <ScrollView horizontal>
      <View style={styles.table}>
        {node.children.map((child, idx) => (
          <TableRowRenderer node={child} key={idx} index={idx} parent={node} />
        ))}
      </View>
    </ScrollView>
  );
};
