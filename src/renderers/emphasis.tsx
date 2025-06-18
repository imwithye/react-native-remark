import { Emphasis } from "mdast";
import { ReactNode } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const EmphasisRenderer = ({
  node,
}: RendererArgs<Emphasis>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  return (
    <Text style={{ fontStyle: "italic" }}>
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
