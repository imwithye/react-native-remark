import { BlockContent } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const blockContent = ({
  node,
  renderers,
  ...args
}: RendererArgs<BlockContent>): ReactNode => {
  switch (node.type) {
    case "blockquote":
      return null;
    case "code":
      return null;
    case "heading":
      return renderers.heading({ node, renderers, ...args });
    case "html":
      return null;
    case "list":
      return renderers.list({ node, renderers, ...args });
    case "paragraph":
      return renderers.paragraph({ node, renderers, ...args });
    case "table":
      return null;
    case "thematicBreak":
      return null;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
