import { BlockContent } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";
import { useMarkdownContext } from "../context";

export const blockContent = ({
  node,
  ...args
}: RendererArgs<BlockContent>): ReactNode => {
  const { renderers } = useMarkdownContext();

  switch (node.type) {
    case "blockquote":
      return renderers.blockquote({ node, ...args });
    case "code":
      return renderers.code({ node, ...args });
    case "heading":
      return renderers.heading({ node, ...args });
    case "html":
      return renderers.html({ node, ...args });
    case "list":
      return renderers.list({ node, ...args });
    case "paragraph":
      return renderers.paragraph({ node, ...args });
    case "table":
      return null;
    case "thematicBreak":
      return renderers.thematicBreak({ node, ...args });
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
