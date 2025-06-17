import { ImageReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const imageReference = ({
  node,
  renderers,
  definitions,
}: RendererArgs<ImageReference>): ReactNode => {
  const imageDefinition = definitions.get(node.identifier);
  if (!imageDefinition) {
    return null;
  }
  return null;
};