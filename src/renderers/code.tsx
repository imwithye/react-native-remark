import Ionicons from "@expo/vector-icons/Ionicons";
import { Code } from "mdast";
import { ReactNode, useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const CodeRenderer = ({ node }: RendererArgs<Code>): ReactNode => {
  const { onCodeCopy } = useMarkdownContext();
  const [copied, setCopied] = useState(false);
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
        <TouchableOpacity
          onPress={() => {
            onCodeCopy?.(node.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            {copied ? (
              <Ionicons name="checkmark" size={16} color="black" />
            ) : (
              <Ionicons name="copy-outline" size={16} color="black" />
            )}
            <Text>{copied ? "Copied" : "Copy"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <ScrollView horizontal style={{ paddingVertical: 10 }}>
          <Text
            style={{
              fontFamily: Platform.select({
                ios: "Menlo",
                android: "monospace",
              }),
            }}
          >
            {node.value}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
