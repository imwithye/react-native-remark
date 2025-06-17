import { Strong } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";
import { useMarkdownContext } from "../context";

export const strong = ({ node, index }: RendererArgs<Strong>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <Text key={index} style={{ fontWeight: "bold" }}>
      {node.children.map((child, idx) =>
        renderers.phrasingContent({
          node: child,
          index: idx,
          parent: node,
        }),
      )}
    </Text>
  );
};
