import { Emphasis } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const emphasis = ({
  node,
  renderers,
  index,
}: RendererArgs<Emphasis>): ReactNode => {
  return (
    <Text key={index} style={{ fontStyle: "italic" }}>
      {node.children.map((child, idx) =>
        renderers.phrasingContent({
          node: child,
          index: idx,
          parent: node,
          renderers,
        }),
      )}
    </Text>
  );
};
