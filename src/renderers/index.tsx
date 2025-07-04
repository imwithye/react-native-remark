import { BlockContentRenderer } from "./blockContent";
import { BlockquoteRenderer } from "./blockquote";
import { BreakRenderer } from "./break";
import { CodeRenderer } from "./code";
import { DefinitionRenderer } from "./definition";
import { DefinitionContentRenderer } from "./definitionContent";
import { DeleteRenderer } from "./delete";
import { EmphasisRenderer } from "./emphasis";
import { FootnoteDefinitionRenderer } from "./footnoteDefinition";
import { FootnoteReferenceRenderer } from "./footnoteReference";
import { HeadingRenderer } from "./heading";
import { HtmlRenderer } from "./html";
import { ImageReferenceRenderer, ImageRenderer } from "./image";
import { InlineCodeRenderer } from "./inlineCode";
import { LinkReferenceRenderer, LinkRenderer } from "./link";
import { ListItemRenderer, ListRenderer } from "./list";
import { ParagraphRenderer } from "./paragraph";
import { PhrasingContentRenderer } from "./phrasingContent";
import { RenderFunc, RendererArgs, Renderers } from "./renderers";
import { RootContentRenderer } from "./rootContent";
import { StrongRenderer } from "./strong";
import { TableCellRenderer, TableRenderer, TableRowRenderer } from "./table";
import { TextRenderer } from "./text";
import { ThematicBreakRenderer } from "./thematicBreak";
import { YamlRenderer } from "./yaml";

export { Renderers, RenderFunc, RendererArgs };

export const defaultRenderers: Renderers = {
  BlockContentRenderer,
  BlockquoteRenderer,
  BreakRenderer,
  CodeRenderer,
  DefinitionRenderer,
  DefinitionContentRenderer,
  DeleteRenderer,
  EmphasisRenderer,
  FootnoteDefinitionRenderer,
  FootnoteReferenceRenderer,
  HeadingRenderer,
  HtmlRenderer,
  ImageRenderer,
  ImageReferenceRenderer,
  InlineCodeRenderer,
  LinkRenderer,
  LinkReferenceRenderer,
  ListRenderer,
  ListItemRenderer,
  ParagraphRenderer,
  PhrasingContentRenderer,
  RootContentRenderer,
  StrongRenderer,
  TableRenderer,
  TableCellRenderer,
  TableRowRenderer,
  TextRenderer,
  ThematicBreakRenderer,
  YamlRenderer,
};
