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
  BlockContentRenderer: RenderFunc<BlockContent>;
  BlockquoteRenderer: RenderFunc<Blockquote>;
  BreakRenderer: RenderFunc<Break>;
  CodeRenderer: RenderFunc<Code>;
  DefinitionContentRenderer: RenderFunc<DefinitionContent>;
  DeleteRenderer: RenderFunc<Delete>;
  EmphasisRenderer: RenderFunc<Emphasis>;
  HeadingRenderer: RenderFunc<Heading>;
  HtmlRenderer: RenderFunc<Html>;
  ImageRenderer: RenderFunc<Image>;
  ImageReferenceRenderer: RenderFunc<ImageReference>;
  InlineCodeRenderer: RenderFunc<InlineCode>;
  LinkRenderer: RenderFunc<Link>;
  LinkReferenceRenderer: RenderFunc<LinkReference>;
  ListRenderer: RenderFunc<List>;
  ListItemRenderer: RenderFunc<ListItem>;
  ParagraphRenderer: RenderFunc<Paragraph>;
  PhrasingContentRenderer: RenderFunc<PhrasingContent>;
  RootContentRenderer: RenderFunc<RootContent>;
  StrongRenderer: RenderFunc<Strong>;
  TextRenderer: RenderFunc<Text>;
  ThematicBreakRenderer: RenderFunc<ThematicBreak>;
  YamlRenderer: RenderFunc<Yaml>;
}
