import {
  BlockContent,
  Blockquote,
  Break,
  Code,
  Definition,
  DefinitionContent,
  Delete,
  Emphasis,
  FootnoteDefinition,
  FootnoteReference,
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
  Table,
  TableCell,
  TableRow,
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

export type RenderFunc<This extends Node, T = object> = (
  args: RendererArgs<This> & T,
) => ReactNode;

export interface Renderers {
  BlockContentRenderer: RenderFunc<BlockContent>;
  BlockquoteRenderer: RenderFunc<Blockquote>;
  BreakRenderer: RenderFunc<Break>;
  CodeRenderer: RenderFunc<Code>;
  DefinitionRenderer: RenderFunc<Definition>;
  DefinitionContentRenderer: RenderFunc<DefinitionContent>;
  DeleteRenderer: RenderFunc<Delete>;
  EmphasisRenderer: RenderFunc<Emphasis>;
  FootnoteDefinitionRenderer: RenderFunc<FootnoteDefinition>;
  FootnoteReferenceRenderer: RenderFunc<FootnoteReference>;
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
  TableRenderer: RenderFunc<Table>;
  TableCellRenderer: RenderFunc<TableCell, { rowIndex: number }>;
  TableRowRenderer: RenderFunc<TableRow>;
  TextRenderer: RenderFunc<Text>;
  ThematicBreakRenderer: RenderFunc<ThematicBreak>;
  YamlRenderer: RenderFunc<Yaml>;
}
