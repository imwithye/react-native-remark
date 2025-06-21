import { ImageReference, Image as MdImage } from "mdast";
import { ReactNode } from "react";
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
  return <Image source={{ uri: node.url }} style={{width: 100, height: 100}} />;
};
