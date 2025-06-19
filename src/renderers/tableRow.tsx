import { TableRow } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { RendererArgs } from "./renderers";

export const TableRowRenderer = ({
  node,
}: RendererArgs<TableRow>): ReactNode => {
  return <View style={{ backgroundColor: "red", height: 2 }}></View>;
};
