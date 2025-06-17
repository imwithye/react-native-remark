import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { View } from "react-native";
import { visit } from "unist-util-visit";

import { defaultRenderers } from "./renderers";
import { Definition, Root } from "mdast";
import { useMemo } from "react";
import { Renderers } from "./renderers/renderers";
import { MarkdownContextProvider } from "./context";

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
  onLinkPress?: (url: string) => void;
};

export const Markdown = ({
  markdown,
  customRenderers,
  onLinkPress,
}: MarkdownProps) => {
  const renderers = useMemo(
    () => ({ ...defaultRenderers, ...customRenderers }),
    [customRenderers],
  );
  const tree = useMemo(() => parser.parse(markdown), [markdown]);
  const definitions = useMemo(() => extractDefinitions(tree), [tree]);

  return (
    <MarkdownContextProvider
      tree={tree}
      renderers={renderers}
      definitions={definitions}
      onLinkPress={onLinkPress}
    >
      <View style={{ gap: 10 }}>
        {tree.children.map((node, index) => (
          <renderers.rootContent
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
