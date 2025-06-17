import {
  Node,
  RootContent,
  PhrasingContent,
  Paragraph,
  Text,
  Strong,
  Delete,
} from "mdast";
import { ReactNode } from "react";

export type RendererArgs<This extends Node> = {
  node: This;
  renderers: Renderers;
  parent?: Node;
  index?: number;
};

export type RenderFunc<This extends Node> = (
  args: RendererArgs<This>,
) => ReactNode;

export interface Renderers {
  rootContent: RenderFunc<RootContent>;
  phrasingContent: RenderFunc<PhrasingContent>;
  paragraph: RenderFunc<Paragraph>;
  text: RenderFunc<Text>;
  strong: RenderFunc<Strong>;
  delete: RenderFunc<Delete>;
}
