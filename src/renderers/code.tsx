import { Code } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Platform, Text, View } from "react-native";

export const code = ({ node, index }: RendererArgs<Code>): ReactNode => {
  return (
    <View
      key={index}
      style={{
        borderWidth: 1,
        borderColor: "#eeeeee",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#eeeeee",
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
