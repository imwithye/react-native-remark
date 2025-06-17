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
  Image,
  ThematicBreak,
  Blockquote,
  Code,
  Break,
  Html,
  Yaml,
  ImageReference,
  LinkReference,
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
  break: RenderFunc<Break>;
  blockContent: RenderFunc<BlockContent>;
  blockquote: RenderFunc<Blockquote>;
  code: RenderFunc<Code>;
  definitionContent: RenderFunc<DefinitionContent>;
  delete: RenderFunc<Delete>;
  emphasis: RenderFunc<Emphasis>;
  heading: RenderFunc<Heading>;
  html: RenderFunc<Html>;
  inlineCode: RenderFunc<InlineCode>;
  linkReference: RenderFunc<LinkReference>;
  link: RenderFunc<Link>;
  list: RenderFunc<List>;
  listItem: RenderFunc<ListItem>;
  imageReference: RenderFunc<ImageReference>;
  image: RenderFunc<Image>;
  paragraph: RenderFunc<Paragraph>;
  phrasingContent: RenderFunc<PhrasingContent>;
  rootContent: RenderFunc<RootContent>;
  strong: RenderFunc<Strong>;
  text: RenderFunc<Text>;
  thematicBreak: RenderFunc<ThematicBreak>;
  yaml: RenderFunc<Yaml>;
}
