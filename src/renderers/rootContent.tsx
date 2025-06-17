import { RootContent } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const rootContent = ({
  node,
  renderers,
  ...args
}: RendererArgs<RootContent>): ReactNode => {
  switch (node.type) {
    case "blockquote":
      return renderers.blockquote({ node, renderers, ...args });
    case "break":
      return renderers.break({ node, renderers, ...args });
    case "code":
      return renderers.code({ node, renderers, ...args });
    case "definition":
      return null;
    case "delete":
      return renderers.delete({ node, renderers, ...args });
    case "emphasis":
      return renderers.emphasis({ node, renderers, ...args });
    case "footnoteDefinition":
      return null;
    case "footnoteReference":
      return null;
    case "heading":
      return renderers.heading({ node, renderers, ...args });
    case "html":
      return renderers.html({ node, renderers, ...args });
    case "image":
      return renderers.image({ node, renderers, ...args });
    case "imageReference":
      return renderers.imageReference({ node, renderers, ...args });
    case "inlineCode":
      return renderers.inlineCode({ node, renderers, ...args });
    case "link":
      return renderers.link({ node, renderers, ...args });
    case "linkReference":
      return renderers.linkReference({ node, renderers, ...args });
    case "list":
      return renderers.list({ node, renderers, ...args });
    case "listItem":
      return renderers.listItem({ node, renderers, ...args });
    case "paragraph":
      return renderers.paragraph({ node, renderers, ...args });
    case "strong":
      return renderers.strong({ node, renderers, ...args });
    case "table":
      return null;
    case "tableCell":
      return null;
    case "tableRow":
      return null;
    case "text":
      return renderers.text({ node, renderers, ...args });
    case "thematicBreak":
      return renderers.thematicBreak({ node, renderers, ...args });
    case "yaml":
      return renderers.yaml({ node, renderers, ...args });
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
