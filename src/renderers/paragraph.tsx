import { Paragraph } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";
import { useMarkdownContext } from "../context";

export const paragraph = ({
  node,
  index,
}: RendererArgs<Paragraph>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <Text key={index}>
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
