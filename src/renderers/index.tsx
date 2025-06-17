import { blockContent } from "./blockContent";
import { blockquote } from "./blockquote";
import { code } from "./code";
import { definitionContent } from "./definitionContent";
import { deleteRenderer } from "./delete";
import { emphasis } from "./emphasis";
import { heading } from "./heading";
import { inlineCode } from "./inlineCode";
import { link } from "./link";
import { list } from "./list";
import { listItem } from "./listItem";
import { paragraph } from "./paragraph";
import { phrasingContent } from "./phrasingContent";
import { Renderers } from "./renderers";
import { rootContent } from "./rootContent";
import { strong } from "./strong";
import { text } from "./text";
import { thematicBreak } from "./thematicBreak";

export const renderers: Renderers = {
  blockContent,
  blockquote,
  code,
  definitionContent,
  delete: deleteRenderer,
  emphasis,
  heading,
  inlineCode,
  link,
  list,
  listItem,
  paragraph,
  phrasingContent,
  rootContent,
  strong,
  text,
  thematicBreak,
};
