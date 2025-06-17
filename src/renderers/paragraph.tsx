import { Paragraph } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const paragraph = ({
  node,
  renderers,
  definitions,
  index,
}: RendererArgs<Paragraph>): ReactNode => {
  return (
    <Text key={index}>
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
