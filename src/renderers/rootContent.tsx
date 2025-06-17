import { RootContent, Node } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const rootContent = ({
  node,
  index,
  renderers,
}: RendererArgs<RootContent, Node>): ReactNode => {
  switch (node.type) {
    case "paragraph":
      return renderers.paragraph({ node, index, renderers });
    default:
      return null;
  }
};
