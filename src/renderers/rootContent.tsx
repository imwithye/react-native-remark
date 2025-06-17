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
      return null;
    case "break":
      return null;
    case "code":
      return null;
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
      return null;
    case "html":
      return null;
    case "image":
      return null;
    case "imageReference":
      return null;
    case "inlineCode":
      return renderers.inlineCode({ node, renderers, ...args });
    case "link":
      return null;
    case "linkReference":
      return null;
    case "list":
      return null;
    case "listItem":
      return null;
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
      return null;
    case "yaml":
      return null;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
