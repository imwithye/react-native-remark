import { Image, ImageReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const imageReference = ({
  node,
  definitions,
}: RendererArgs<ImageReference>): ReactNode => {
  const imageDefinition = definitions[node.identifier];
  if (!imageDefinition) {
    return null;
  }
  return null;
};

export const image = ({
  node,
  renderers,
  definitions,
}: RendererArgs<Image>): ReactNode => {
  return null;
};
