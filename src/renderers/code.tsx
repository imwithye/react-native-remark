import { Code } from "mdast";
import { ReactNode } from "react";
import { Platform, Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const CodeRenderer = ({ node }: RendererArgs<Code>): ReactNode => {
  const { styles } = useMarkdownContext();
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: styles.borderColor,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: styles.borderColor,
          backgroundColor: "#f5f5f5",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>{node.lang}</Text>
        <Text>Copy</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
          }}
        >
          {node.value}
        </Text>
      </View>
    </View>
  );
};
