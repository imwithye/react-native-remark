import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { View } from "react-native";
import { visit } from "unist-util-visit";

import { renderers } from "./renderers";
import { Definition, Root } from "mdast";
import { useMemo } from "react";

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
};

export const Markdown = ({ markdown }: MarkdownProps) => {
  const tree = useMemo(() => parser.parse(markdown), [markdown]);
  const definitions = useMemo(() => extractDefinitions(tree), [tree]);

  return (
    <View style={{ gap: 10 }}>
      {tree.children.map((node, index) =>
        renderers.rootContent({
          node,
          index,
          renderers,
          definitions,
          parent: tree,
        }),
      )}
    </View>
  );
};
