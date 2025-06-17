import { Paragraph, Node } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const paragraph = ({
  index,
}: RendererArgs<Paragraph, Node>): ReactNode => {
  return <Text key={index}>Hello, world! {index}</Text>;
};
