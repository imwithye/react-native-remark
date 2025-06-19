import { Root } from "mdast";
import { View } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const RootRenderer = ({ node }: RendererArgs<Root>) => {
  const { renderers, styles } = useMarkdownContext();
  const { RootContentRenderer } = renderers;

  return (
    <View style={styles.DefaultContainerStyle}>
      {node.children.map((node, index) => (
        <RootContentRenderer
          key={index}
          node={node}
          index={index}
          parent={node}
        />
      ))}
    </View>
  );
};
