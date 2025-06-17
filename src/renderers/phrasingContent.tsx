import { PhrasingContent, Node } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const phrasingContent = ({
  node,
}: RendererArgs<PhrasingContent, Node>): ReactNode => {
  switch (node.type) {
    default:
      return null;
  }
};
