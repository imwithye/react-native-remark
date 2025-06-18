import { ImageReference } from "mdast";
import { ReactNode } from "react";

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

export const ImageRenderer = (): ReactNode => {
  return null;
};
