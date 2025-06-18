import { Heading } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const HeadingRenderer = ({ node }: RendererArgs<Heading>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  const depth = node.depth;
  const fontSize = 32 - depth * 2;
  const fontWeight = depth <= 3 ? "bold" : "semibold";

  return (
    <Text style={{ fontSize, fontWeight }}>
      {node.children.map((child, idx) => (
        <PhrasingContentRenderer
          node={child}
          key={idx}
          index={idx}
          parent={node}
        />
      ))}
    </Text>
  );
};
