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
  InlineCode,
  BlockContent,
  DefinitionContent,
  List,
  ListItem,
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
  blockContent: RenderFunc<BlockContent>;
  definitionContent: RenderFunc<DefinitionContent>;
  phrasingContent: RenderFunc<PhrasingContent>;
  list: RenderFunc<List>;
  listItem: RenderFunc<ListItem>;
  paragraph: RenderFunc<Paragraph>;
  inlineCode: RenderFunc<InlineCode>;
  heading: RenderFunc<Heading>;
  text: RenderFunc<Text>;
  strong: RenderFunc<Strong>;
  delete: RenderFunc<Delete>;
  emphasis: RenderFunc<Emphasis>;
}
