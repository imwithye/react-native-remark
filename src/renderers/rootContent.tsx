import { RootContent, Node } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const rootContent = ({
  node,
  renderers,
  ...args
}: RendererArgs<RootContent, Node>): ReactNode => {
  switch (node.type) {
    case "paragraph":
      return renderers.paragraph({ node, renderers, ...args });
    default:
      return null;
  }
};
