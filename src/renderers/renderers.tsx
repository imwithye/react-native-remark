import {
  Node,
  RootContent,
  PhrasingContent,
  Paragraph,
  Text,
  Strong,
  Delete,
  Emphasis,
  Heading,
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
  heading: RenderFunc<Heading>;
  text: RenderFunc<Text>;
  strong: RenderFunc<Strong>;
  delete: RenderFunc<Delete>;
  emphasis: RenderFunc<Emphasis>;
}
