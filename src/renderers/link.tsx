import { Link, LinkReference } from "mdast";
import { ReactNode, useCallback } from "react";
import { Text } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const LinkReferenceRenderer = ({
  node,
}: RendererArgs<LinkReference>): ReactNode => {
  const { renderers, definitions, onLinkPress } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;
  const url = definitions[node.identifier]?.url;

  const onPress = useCallback(() => {
    if (url) {
      onLinkPress?.(url);
    }
  }, [url, onLinkPress]);

  return (
    <Text
      style={{ color: "#007AFF" }}
      onPress={onLinkPress ? onPress : undefined}
    >
      {node.children.map((child, index) => (
        <PhrasingContentRenderer
          node={child}
          key={index}
          index={index}
          parent={node}
        />
      ))}
    </Text>
  );
};

export const LinkRenderer = ({ node }: RendererArgs<Link>): ReactNode => {
  const { renderers, onLinkPress } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;
  const { url } = node;

  const onPress = useCallback(() => {
    if (url) {
      onLinkPress?.(url);
    }
  }, [url, onLinkPress]);

  return (
    <Text
      style={{ color: "#007AFF" }}
      onPress={onLinkPress ? onPress : undefined}
    >
      {node.children.map((child, index) => (
        <PhrasingContentRenderer
          node={child}
          key={index}
          index={index}
          parent={node}
        />
      ))}
    </Text>
  );
};
