import { blockContent } from "./blockContent";
import { blockquote } from "./blockquote";
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
  rootContent,
  blockContent,
  definitionContent,
  blockquote,
  phrasingContent,
  paragraph,
  inlineCode,
  list,
  link,
  listItem,
  heading,
  text,
  strong,
  delete: deleteRenderer,
  emphasis,
  thematicBreak,
};
