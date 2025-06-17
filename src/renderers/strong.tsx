import { Strong } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const strong = ({
  node,
  renderers,
  definitions,
  index,
}: RendererArgs<Strong>): ReactNode => {
  return (
    <Text key={index} style={{ fontWeight: "bold" }}>
      {node.children.map((child, idx) =>
        renderers.phrasingContent({
          node: child,
          index: idx,
          parent: node,
          renderers,
          definitions,
        }),
      )}
    </Text>
  );
};
