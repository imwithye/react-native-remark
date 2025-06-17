import { PhrasingContent } from "mdast";
import { ReactNode } from "react";

import { useMarkdownContext } from "../context";
import { RendererArgs } from "./renderers";

export const phrasingContent = ({
  node,
  ...args
}: RendererArgs<PhrasingContent>): ReactNode => {
  const { renderers } = useMarkdownContext();

  switch (node.type) {
    case "break":
      return renderers.break({ node, ...args });
    case "delete":
      return renderers.delete({ node, ...args });
    case "emphasis":
      return renderers.emphasis({ node, ...args });
    case "footnoteReference":
      return null;
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
    case "strong":
      return renderers.strong({ node, ...args });
    case "text":
      return renderers.text({ node, ...args });
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
