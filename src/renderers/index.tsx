import { blockContent } from "./blockContent";
import { blockquote } from "./blockquote";
import { breakRenderer } from "./break";
import { code } from "./code";
import { definitionContent } from "./definitionContent";
import { deleteRenderer } from "./delete";
import { emphasis } from "./emphasis";
import { heading } from "./heading";
import { html } from "./html";
import { image, imageReference } from "./image";
import { inlineCode } from "./inlineCode";
import { link, linkReference } from "./link";
import { list } from "./list";
import { listItem } from "./listItem";
import { paragraph } from "./paragraph";
import { phrasingContent } from "./phrasingContent";
import { Renderers } from "./renderers";
import { rootContent } from "./rootContent";
import { strong } from "./strong";
import { text } from "./text";
import { thematicBreak } from "./thematicBreak";
import { yaml } from "./yaml";

export const renderers: Renderers = {
  break: breakRenderer,
  blockContent,
  blockquote,
  code,
  definitionContent,
  delete: deleteRenderer,
  emphasis,
  heading,
  html,
  inlineCode,
  linkReference,
  link,
  list,
  listItem,
  imageReference,
  image,
  paragraph,
  phrasingContent,
  rootContent,
  strong,
  text,
  thematicBreak,
  yaml,
};
