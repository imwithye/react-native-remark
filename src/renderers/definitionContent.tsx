import { DefinitionContent } from "mdast";
import { ReactNode } from "react";

import { RendererArgs } from "./renderers";

export const DefinitionContentRenderer = ({
  node,
}: RendererArgs<DefinitionContent>): ReactNode => {
  switch (node.type) {
    case "definition":
      return null;
    case "footnoteDefinition":
      return null;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _: never = node;
      return null;
  }
};
