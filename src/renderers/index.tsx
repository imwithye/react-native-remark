import { BlockContentRenderer } from "./blockContent";
import { BlockquoteRenderer } from "./blockquote";
import { BreakRenderer } from "./break";
import { CodeRenderer } from "./code";
import { DefinitionContentRenderer } from "./definitionContent";
import { DeleteRenderer } from "./delete";
import { EmphasisRenderer } from "./emphasis";
import { HeadingRenderer } from "./heading";
import { HtmlRenderer } from "./html";
import { ImageReferenceRenderer, ImageRenderer } from "./image";
import { InlineCodeRenderer } from "./inlineCode";
import { LinkReferenceRenderer, LinkRenderer } from "./link";
import { ListItemRenderer, ListRenderer } from "./list";
import { ParagraphRenderer } from "./paragraph";
import { PhrasingContentRenderer } from "./phrasingContent";
import { Renderers } from "./renderers";
import { RootContentRenderer } from "./rootContent";
import { StrongRenderer } from "./strong";
import { TableRenderer } from "./table";
import { TableCellRenderer } from "./tableCell";
import { TableRowRenderer } from "./tableRow";
import { TextRenderer } from "./text";
import { ThematicBreakRenderer } from "./thematicBreak";
import { YamlRenderer } from "./yaml";

export const defaultRenderers: Renderers = {
  BlockContentRenderer,
  BlockquoteRenderer,
  BreakRenderer,
  CodeRenderer,
  DefinitionContentRenderer,
  DeleteRenderer,
  EmphasisRenderer,
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
