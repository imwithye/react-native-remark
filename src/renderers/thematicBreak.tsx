import { ThematicBreak } from "mdast";
import { ReactNode } from "react";
import { View } from "react-native";

import { RendererArgs } from "./renderers";

export const thematicBreak = ({
  index,
}: RendererArgs<ThematicBreak>): ReactNode => {
  return <View key={index} style={{ height: 1, backgroundColor: "#eeeeee" }} />;
};
