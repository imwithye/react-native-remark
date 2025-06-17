import { Link, LinkReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";

export const linkReference = ({
  node,
  renderers,
  definitions,
  index,
}: RendererArgs<LinkReference>): ReactNode => {
  return (
    <Text key={index} style={{ color: "#007AFF" }}>
      {node.children.map((child, index) =>
        renderers.phrasingContent({
          node: child,
          index,
          parent: node,
          renderers,
          definitions,
        }),
      )}
    </Text>
  );
};

export const link = ({
  node,
  renderers,
  definitions,
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
          definitions,
        }),
      )}
    </Text>
  );
};
