import { ImageReference } from "mdast";
import { ReactNode } from "react";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const imageReference = ({
  node,
}: RendererArgs<ImageReference>): ReactNode => {
  const { definitions } = useMarkdownContext();

  const imageDefinition = definitions[node.identifier];
  if (!imageDefinition) {
    return null;
  }
  return null;
};

export const image = (): ReactNode => {
  return null;
};
