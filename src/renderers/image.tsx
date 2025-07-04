import { ImageReference, Image as MdImage } from "mdast";
import { ReactNode, useEffect, useState } from "react";
import { Image } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

type AutoSizedImageProps = {
  uri: string;
};

const AutoSizedImage = ({ uri }: AutoSizedImageProps) => {
  const { contentSize, styles } = useMarkdownContext();
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const mergedStyles = mergeStyles(styles.image, {
    width: size.width,
    height: size.height,
  });

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      const ratio = height / width;
      const newWidth = Math.min(width, contentSize.width);
      const newHeight = newWidth * ratio;
      setSize({ width: newWidth, height: newHeight });
    });
  }, [contentSize, uri]);

  if (size.width === 0 || size.height === 0) {
    return null;
  }

  return <Image key={uri} source={{ uri }} style={mergedStyles} />;
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
