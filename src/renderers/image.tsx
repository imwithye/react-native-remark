import { ImageReference, Image as MdImage } from "mdast";
import { ReactNode, useState } from "react";
import { Image } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const ImageReferenceRenderer = ({
  node,
}: RendererArgs<ImageReference>): ReactNode => {
  const { definitions } = useMarkdownContext();

  const imageDefinition = definitions[node.identifier];
  if (!imageDefinition) {
    return null;
  }
  return null;
};

export const ImageRenderer = ({ node }: RendererArgs<MdImage>): ReactNode => {
  const { contentSize } = useMarkdownContext();
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  return (
    <Image
      onLoad={(e) => {
        const { width, height } = e.nativeEvent.source;
        const ratio = height / width;
        const newWidth = Math.min(width, contentSize.width);
        const newHeight = newWidth * ratio;
        setSize({ width: newWidth, height: newHeight });
      }}
      source={{ uri: node.url }}
      style={{ width: size.width, height: size.height, borderRadius: 5 }}
    />
  );
};
