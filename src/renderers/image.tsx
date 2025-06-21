import { ImageReference, Image as MdImage } from "mdast";
import { ReactNode, useState } from "react";
import { Image } from "react-native";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

type AutoSizedImageProps = {
  uri: string;
};

const AutoSizedImage = ({ uri }: AutoSizedImageProps) => {
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
      source={{ uri }}
      style={{ width: size.width, height: size.height, borderRadius: 5 }}
    />
  );
};

export const ImageReferenceRenderer = ({
  node,
}: RendererArgs<ImageReference>): ReactNode => {
  const { definitions } = useMarkdownContext();

  const imageDefinition = definitions[node.identifier];
  if (!imageDefinition || !imageDefinition.url) {
    return null;
  }

  return <AutoSizedImage uri={imageDefinition.url} />;
};

export const ImageRenderer = ({ node }: RendererArgs<MdImage>): ReactNode => {
  if (!node.url) {
    return null;
  }

  return <AutoSizedImage uri={node.url} />;
};
