import {
  BlockContent,
  Blockquote,
  Break,
  Code,
  DefinitionContent,
  Delete,
  Emphasis,
  Heading,
  Html,
  Image,
  ImageReference,
  InlineCode,
  Link,
  LinkReference,
  List,
  ListItem,
  Node,
  Paragraph,
  PhrasingContent,
  RootContent,
  Strong,
  Text,
  ThematicBreak,
  Yaml,
} from "mdast";
import { ReactNode } from "react";

export type RendererArgs<This extends Node> = {
  node: This;
  parent?: Node;
  index?: number;
};

export type RenderFunc<This extends Node> = (
  args: RendererArgs<This>,
) => ReactNode;

export interface Renderers {
  blockContent: RenderFunc<BlockContent>;
  blockquote: RenderFunc<Blockquote>;
  break: RenderFunc<Break>;
  code: RenderFunc<Code>;
  definitionContent: RenderFunc<DefinitionContent>;
  delete: RenderFunc<Delete>;
  emphasis: RenderFunc<Emphasis>;
  heading: RenderFunc<Heading>;
  html: RenderFunc<Html>;
  image: RenderFunc<Image>;
  imageReference: RenderFunc<ImageReference>;
  inlineCode: RenderFunc<InlineCode>;
  link: RenderFunc<Link>;
  linkReference: RenderFunc<LinkReference>;
  list: RenderFunc<List>;
  listItem: RenderFunc<ListItem>;
  paragraph: RenderFunc<Paragraph>;
  phrasingContent: RenderFunc<PhrasingContent>;
  rootContent: RenderFunc<RootContent>;
  strong: RenderFunc<Strong>;
  text: RenderFunc<Text>;
  thematicBreak: RenderFunc<ThematicBreak>;
  yaml: RenderFunc<Yaml>;
}
