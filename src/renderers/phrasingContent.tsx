import { PhrasingContent } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const phrasingContent = ({
  node,
  renderers,
  ...args
}: RendererArgs<PhrasingContent>): ReactNode => {
  switch (node.type) {
    case "break":
      return renderers.break({ node, renderers, ...args });
    case "delete":
      return renderers.delete({ node, renderers, ...args });
    case "emphasis":
      return renderers.emphasis({ node, renderers, ...args });
    case "footnoteReference":
      return null;
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
    case "strong":
      return renderers.strong({ node, renderers, ...args });
    case "text":
      return renderers.text({ node, renderers, ...args });
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
