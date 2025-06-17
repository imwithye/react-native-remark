import { Link, LinkReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { Text } from "react-native";
import { useMarkdownContext } from "../context";

export const linkReference = ({
  node,
  index,
}: RendererArgs<LinkReference>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <Text key={index} style={{ color: "#007AFF" }}>
      {node.children.map((child, index) =>
        renderers.phrasingContent({
          node: child,
          index,
          parent: node,
        }),
      )}
    </Text>
  );
};

export const link = ({ node, index }: RendererArgs<Link>): ReactNode => {
  const { renderers } = useMarkdownContext();

  return (
    <Text key={index} style={{ color: "#007AFF" }}>
      {node.children.map((child, index) =>
        renderers.phrasingContent({
          node: child,
          index,
          parent: node,
        }),
      )}
    </Text>
  );
};
