import { Table } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const TableRenderer = ({ node }: RendererArgs<Table>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { TableRowRenderer } = renderers;

  return (
    <View>
      {node.children.map((child, idx) => (
        <TableRowRenderer node={child} key={idx} index={idx} parent={node} />
      ))}
    </View>
  );
};
