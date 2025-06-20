import Ionicons from "@expo/vector-icons/Ionicons";
import { Code } from "mdast";
import { ReactNode, useState } from "react";
import {
  Platform,
  ScrollView,
  ScrollViewProps,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import SyntaxHighlighter from "react-syntax-highlighter";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

const fontFamily = Platform.select({
  ios: "Courier New",
  android: "monospace",
});

type NativeRendererProps = {
  node: rendererNode;
  style?: TextStyle;
};

const TextRenderer = ({ node }: NativeRendererProps) => {
  const value = (node.value?.toString() || "").replace(/\n/g, " ");
  return <Text style={{ fontFamily, fontSize: 14 }}>{value}</Text>;
};

const ElementRenderer = ({ node, style }: NativeRendererProps) => {
  const { children } = node;
  const child = children?.map((child, idx) => {
    return <NativeRenderer key={idx} node={child} />;
  });
  return <Text style={style}>{child}</Text>;
};

const NativeRenderer = ({ node, style }: NativeRendererProps) => {
  const { type } = node;
  switch (type) {
    case "text":
      return <TextRenderer node={node} />;
    case "element":
      return <ElementRenderer node={node} style={style} />;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = type;
      return null;
  }
};

const nativeRenderer = () => {
  return (props: rendererProps) => {
    return props.rows.map((row, idx) => {
      return <NativeRenderer key={idx} node={row} />;
    });
  };
};

const ScrollViewContainer = ({ style, ...props }: ScrollViewProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = style;
  return <ScrollView horizontal style={{ paddingVertical: 10 }} {...props} />;
};

type NativeSyntaxHighlighterProps = {
  language: string;
  children: string;
};

const NativeSyntaxHighlighter = ({
  language,
  children,
}: NativeSyntaxHighlighterProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      renderer={nativeRenderer()}
      PreTag={ScrollViewContainer}
      CodeTag={View}
    >
      {children}
    </SyntaxHighlighter>
  );
};

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
        <NativeSyntaxHighlighter language={node.lang ?? "hlsl"}>
          {node.value}
        </NativeSyntaxHighlighter>
      </View>
    </View>
  );
};
