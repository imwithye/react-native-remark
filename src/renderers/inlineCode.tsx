import { InlineCode } from "mdast";
import { ReactNode } from "react";
import { Platform, Text } from "react-native";

import { RendererArgs } from "./renderers";

export const InlineCodeRenderer = ({
  node,
}: RendererArgs<InlineCode>): ReactNode => {
  return (
    <Text
      style={{
        fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
        backgroundColor: "#f5f5f5",
      }}
    >
      {node.value}
    </Text>
  );
};
