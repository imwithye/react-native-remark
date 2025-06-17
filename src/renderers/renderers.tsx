import { Node, RootContent, PhrasingContent, Paragraph } from "mdast";
import { ReactNode } from "react";

export type RendererArgs<This extends Node, Parent extends Node> = {
  node: This;
  renderers: Renderers;
  parent?: Parent;
  index?: number;
};

export type RenderFunc<This extends Node, Parent extends Node> = (
  args: RendererArgs<This, Parent>,
) => ReactNode;

export interface Renderers {
  rootContent: RenderFunc<RootContent, Node>;
  phrasingContent: RenderFunc<PhrasingContent, Node>;
  paragraph: RenderFunc<Paragraph, Node>;
}
