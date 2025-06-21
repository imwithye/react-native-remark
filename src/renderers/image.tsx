import { ImageReference, Image as MdImage } from "mdast";
import { ReactNode, useState } from "react";
import { Dimensions, Image } from "react-native";

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
  const [width, setWidth] = useState<number | null>(0);
  const [height, setHeight] = useState<number | null>(0);

  return (
    <Image
      onLoad={(e) => {
        const { width, height } = e.nativeEvent.source;
        const ratio = height / width;
        const contentWidth = Dimensions.get("window").width;
        const contentHeight = contentWidth * ratio;
        setWidth(contentWidth);
        setHeight(contentHeight);
      }}
      source={{ uri: node.url }}
      style={{ width: width, height: height, borderRadius: 5 }}
    />
  );
};
