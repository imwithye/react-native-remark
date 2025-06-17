import { ImageReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { useMarkdownContext } from "../context";

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
