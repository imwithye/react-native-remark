import { Link } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const link = ({
  node,
  renderers,
  index,
}: RendererArgs<Link>): ReactNode => {
  return (
    <Text key={index} style={{ color: "#007AFF" }}>
      {node.children.map((child, index) =>
        renderers.phrasingContent({
          node: child,
          index,
          parent: node,
          renderers,
        }),
      )}
    </Text>
  );
};
