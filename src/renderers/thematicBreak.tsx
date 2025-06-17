import { ThematicBreak } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { View } from "react-native";

export const thematicBreak = ({
  index,
}: RendererArgs<ThematicBreak>): ReactNode => {
  return <View key={index} style={{ height: 1, backgroundColor: "#eeeeee" }} />;
};
