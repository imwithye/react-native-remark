import { RootContent } from "mdast";
import { ReactNode } from "react";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const rootContent = ({
  node,
  ...args
}: RendererArgs<RootContent>): ReactNode => {
  const { renderers } = useMarkdownContext();

  switch (node.type) {
    case "blockquote":
      return renderers.blockquote({ node, ...args });
    case "break":
      return renderers.break({ node, ...args });
    case "code":
      return renderers.code({ node, ...args });
    case "definition":
      return null;
    case "delete":
      return renderers.delete({ node, ...args });
    case "emphasis":
      return renderers.emphasis({ node, ...args });
    case "footnoteDefinition":
      return null;
    case "footnoteReference":
      return null;
    case "heading":
      return renderers.heading({ node, ...args });
    case "html":
      return renderers.html({ node, ...args });
    case "image":
      return renderers.image({ node, ...args });
    case "imageReference":
      return renderers.imageReference({ node, ...args });
    case "inlineCode":
      return renderers.inlineCode({ node, ...args });
    case "link":
      return renderers.link({ node, ...args });
    case "linkReference":
      return renderers.linkReference({ node, ...args });
    case "list":
      return renderers.list({ node, ...args });
    case "listItem":
      return renderers.listItem({ node, ...args });
    case "paragraph":
      return renderers.paragraph({ node, ...args });
    case "strong":
      return renderers.strong({ node, ...args });
    case "table":
      return null;
    case "tableCell":
      return null;
    case "tableRow":
      return null;
    case "text":
      return renderers.text({ node, ...args });
    case "thematicBreak":
      return renderers.thematicBreak({ node, ...args });
    case "yaml":
      return renderers.yaml({ node, ...args });
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
