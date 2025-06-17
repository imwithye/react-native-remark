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
  Link,
  ThematicBreak,
  Blockquote,
  Code,
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
  blockContent: RenderFunc<BlockContent>;
  blockquote: RenderFunc<Blockquote>;
  code: RenderFunc<Code>;
  definitionContent: RenderFunc<DefinitionContent>;
  delete: RenderFunc<Delete>;
  emphasis: RenderFunc<Emphasis>;
  heading: RenderFunc<Heading>;
  inlineCode: RenderFunc<InlineCode>;
  link: RenderFunc<Link>;
  list: RenderFunc<List>;
  listItem: RenderFunc<ListItem>;
  paragraph: RenderFunc<Paragraph>;
  phrasingContent: RenderFunc<PhrasingContent>;
  rootContent: RenderFunc<RootContent>;
  strong: RenderFunc<Strong>;
  text: RenderFunc<Text>;
  thematicBreak: RenderFunc<ThematicBreak>;
}
