import Ionicons from "@expo/vector-icons/Ionicons";
import { Code } from "mdast";
import { ReactNode, useState } from "react";
import {
  ScrollView,
  ScrollViewProps,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps,
  useColorScheme,
} from "react-native";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

const generateNativeStyles = (
  theme: typeof atomOneLight | typeof atomOneDark,
  node: rendererNode,
  themedStyle?: TextStyle,
): TextStyle => {
  const classNames = node.properties?.className || [];
  const style: TextStyle = mergeStyles(themedStyle, {});
  for (const className of classNames) {
    if (!className || typeof className !== "string") {
      continue;
    }
    style.color = theme[className]?.color;
    const fontWeight = theme[className]?.fontWeight;
    switch (fontWeight) {
      case "bold":
        style.fontWeight = "bold";
        break;
      default:
        break;
    }
  }

  return style;
};

type NativeRendererProps = {
  node: rendererNode;
  style?: TextStyle;
};

const TextRenderer = ({ node }: NativeRendererProps) => {
  const value = (node.value?.toString() || "").replace(/\n/g, " ");
  return <Text>{value}</Text>;
};

const ElementRenderer = ({ node }: NativeRendererProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? atomOneDark : atomOneLight;
  const { styles } = useMarkdownContext();
  const { children } = node;
  const style = generateNativeStyles(
    theme,
    node,
    styles.codeBlock?.contentTextStyle,
  );
  const child = children?.map((child, idx) => {
    return <NativeRenderer key={idx} node={child} />;
  });
  return <Text style={style}>{child}</Text>;
};

const NativeRenderer = ({ node }: NativeRendererProps) => {
  const { type } = node;
  switch (type) {
    case "text":
      return <TextRenderer node={node} />;
    case "element":
      return <ElementRenderer node={node} />;
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

const ScrollViewContainer = ({ children }: ScrollViewProps) => {
  return (
    <ScrollView horizontal style={{ paddingVertical: 10 }}>
      {children}
    </ScrollView>
  );
};

const ViewContainer = ({ children }: ViewProps) => {
  return <View>{children}</View>;
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
      CodeTag={ViewContainer}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export const CodeRenderer = ({ node }: RendererArgs<Code>): ReactNode => {
  const { styles, onCodeCopy } = useMarkdownContext();
  const [copied, setCopied] = useState(false);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: styles.borderColor,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderColor: styles.borderColor,
          backgroundColor: styles.codeBlock?.headerBackgroundColor,
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={styles.codeBlock?.headerTextStyle}>{node.lang}</Text>
        <TouchableOpacity
          onPress={() => {
            onCodeCopy?.(node.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          disabled={!onCodeCopy}
          style={{
            opacity: onCodeCopy ? 1 : 0,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            {copied ? (
              <Ionicons
                name="checkmark"
                size={16}
                color={styles.codeBlock?.headerTextStyle?.color}
              />
            ) : (
              <Ionicons
                name="copy-outline"
                size={16}
                color={styles.codeBlock?.headerTextStyle?.color}
              />
            )}
            <Text style={styles.codeBlock?.headerTextStyle}>
              {copied ? "Copied" : "Copy"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: styles.codeBlock?.contentBackgroundColor,
        }}
      >
        <NativeSyntaxHighlighter language={node.lang ?? "hlsl"}>
          {node.value}
        </NativeSyntaxHighlighter>
      </View>
    </View>
  );
};
