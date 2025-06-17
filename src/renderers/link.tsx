import { Link, LinkReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode, useCallback } from "react";
import { Text } from "react-native";
import { useMarkdownContext } from "../context";

export const linkReference = ({
  node,
  index,
}: RendererArgs<LinkReference>): ReactNode => {
  const { renderers, definitions, onLinkPress } = useMarkdownContext();
  const url = definitions[node.identifier]?.url;

  const onPress = useCallback(() => {
    if (url) {
      onLinkPress?.(url);
    }
  }, [url, onLinkPress]);

  return (
    <Text
      key={index}
      style={{ color: "#007AFF" }}
      onPress={onLinkPress ? onPress : undefined}
    >
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
  const { renderers, onLinkPress } = useMarkdownContext();
  const { url } = node;

  const onPress = useCallback(() => {
    if (url) {
      onLinkPress?.(url);
    }
  }, [url, onLinkPress]);

  return (
    <Text
      key={index}
      style={{ color: "#007AFF" }}
      onPress={onLinkPress ? onPress : undefined}
    >
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
