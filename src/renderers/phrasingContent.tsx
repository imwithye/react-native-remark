import { PhrasingContent, Node } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const phrasingContent = ({
  node,
  renderers,
  ...args
}: RendererArgs<PhrasingContent, Node>): ReactNode => {
  switch (node.type) {
    case "break":
      return null;
    case "delete":
      return null;
    case "emphasis":
      return null;
    case "footnoteReference":
      return null;
    case "html":
      return null;
    case "image":
      return null;
    case "imageReference":
      return null;
    case "inlineCode":
      return null;
    case "link":
      return null;
    case "linkReference":
      return null;
    case "strong":
      return null;
    case "text":
      return renderers.text({ node, renderers, ...args });
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
