import { Image } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const image = ({
  node,
  renderers,
  definitions,
}: RendererArgs<Image>): ReactNode => {
  return null;
};