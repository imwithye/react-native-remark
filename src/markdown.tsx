import { Definition, Root } from "mdast";
import { useMemo, useState } from "react";
import { LayoutChangeEvent, View, useColorScheme } from "react-native";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

import { MarkdownContextProvider } from "./context";
import { defaultRenderers } from "./renderers";
import { Renderers } from "./renderers/renderers";
import { RootRenderer } from "./renderers/root";
import { Theme, defaultTheme } from "./themes";
import { Styles, mergeStyles } from "./themes/themes";

const parser = unified().use(remarkParse).use(remarkGfm);

function extractDefinitions(tree: Root): Record<string, Definition> {
  const definitions: Record<string, Definition> = {};
  visit(tree, "definition", (node: Definition) => {
    definitions[node.identifier] = node;
  });
  return definitions;
}

export type MarkdownProps = {
  markdown: string;
  theme?: Theme;
  customRenderers?: Partial<Renderers>;
  customStyles?: Partial<Styles>;
  onCodeCopy?: (code: string) => void;
  onLinkPress?: (url: string) => void;
};

export const Markdown = ({
  markdown,
  theme,
  customRenderers,
  customStyles,
  onCodeCopy,
  onLinkPress,
}: MarkdownProps) => {
  const tree = useMemo(() => parser.parse(markdown), [markdown]);

  const activeTheme = theme ?? defaultTheme;
  const renderers = useMemo(
    () => ({
      ...defaultRenderers,
      ...activeTheme.renderers,
      ...customRenderers,
    }),
    [activeTheme.renderers, customRenderers],
  );
  const definitions = useMemo(() => extractDefinitions(tree), [tree]);

  const [contentSize, setContentSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setContentSize({ width, height });
  };

  const colorScheme = useColorScheme();
  const mode = colorScheme === "dark" ? "dark" : "light";

  const mergedStyles = mergeStyles(
    activeTheme.global,
    activeTheme[mode],
    customStyles,
  );

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <MarkdownContextProvider
        tree={tree}
        renderers={renderers}
        definitions={definitions}
        contentSize={contentSize}
        styles={mergedStyles}
        onCodeCopy={onCodeCopy}
        onLinkPress={onLinkPress}
      >
        <RootRenderer node={tree} />
      </MarkdownContextProvider>
    </View>
  );
};
