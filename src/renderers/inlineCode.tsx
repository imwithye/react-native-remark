import { InlineCode } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Platform, Text } from "react-native";

export const inlineCode = ({
  node,
  index,
}: RendererArgs<InlineCode>): ReactNode => {
  return (
    <Text
      key={index}
      style={{
        fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
        backgroundColor: "#f5f5f5",
      }}
    >
      {node.value}
    </Text>
  );
};
