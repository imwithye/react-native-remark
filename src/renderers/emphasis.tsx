import { Emphasis } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const emphasis = ({
  node,
  index,
}: RendererArgs<Emphasis>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <Text key={index} style={{ fontStyle: "italic" }}>
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
