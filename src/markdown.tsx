import { Definition, Root } from "mdast";
import { useMemo } from "react";
import { View, useColorScheme } from "react-native";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

import { MarkdownContextProvider } from "./context";
import { defaultRenderers } from "./renderers";
import { Renderers } from "./renderers/renderers";
import { defaultTheme } from "./themes";
import { Theme, themedStyle } from "./themes/themes";

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
  customRenderers?: Partial<Renderers>;
  customTheme?: Theme;
  onLinkPress?: (url: string) => void;
};

export const Markdown = ({
  markdown,
  customRenderers,
  customTheme,
  onLinkPress,
}: MarkdownProps) => {
  const colorScheme = useColorScheme();
  const renderers = useMemo(
    () => ({ ...defaultRenderers, ...customRenderers }),
    [customRenderers],
  );
  const theme = useMemo(
    () => ({
      global: { ...defaultTheme.global, ...customTheme?.global },
      light: { ...defaultTheme.light, ...customTheme?.light },
      dark: { ...defaultTheme.dark, ...customTheme?.dark },
    }),
    [customTheme],
  );
  const { RootContentRenderer } = renderers;
  const tree = useMemo(() => parser.parse(markdown), [markdown]);
  const definitions = useMemo(() => extractDefinitions(tree), [tree]);

  return (
    <MarkdownContextProvider
      tree={tree}
      renderers={renderers}
      definitions={definitions}
      theme={theme}
      onLinkPress={onLinkPress}
    >
      <View style={themedStyle(theme, colorScheme, "DefaultContainerStyle")}>
        {tree.children.map((node, index) => (
          <RootContentRenderer
            key={index}
            node={node}
            index={index}
            parent={tree}
          />
        ))}
      </View>
    </MarkdownContextProvider>
  );
};
