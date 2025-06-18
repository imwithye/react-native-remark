import { Link, LinkReference } from "mdast";
import { ReactNode, useCallback } from "react";
import { Text, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { themedStyle } from "../themes/themes";
import { RendererArgs } from "./renderers";

export const LinkReferenceRenderer = ({
  node,
}: RendererArgs<LinkReference>): ReactNode => {
  const colorScheme = useColorScheme();
  const { renderers, definitions, theme, onLinkPress } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;
  const url = definitions[node.identifier]?.url;

  const onPress = useCallback(() => {
    if (url) {
      onLinkPress?.(url);
    }
  }, [url, onLinkPress]);

  return (
    <Text
      style={themedStyle(theme, colorScheme, "LinkReferenceStyle")}
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
  const colorScheme = useColorScheme();
  const { renderers, theme, onLinkPress } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;
  const { url } = node;

  const onPress = useCallback(() => {
    if (url) {
      onLinkPress?.(url);
    }
  }, [url, onLinkPress]);

  return (
    <Text
      style={themedStyle(theme, colorScheme, "LinkStyle")}
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
