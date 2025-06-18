import { Paragraph } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const ParagraphRenderer = ({
  node,
}: RendererArgs<Paragraph>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  return (
    <Text>
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
