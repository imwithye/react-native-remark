import { deleteRenderer } from "./delete";
import { emphasis } from "./emphasis";
import { heading } from "./heading";
import { paragraph } from "./paragraph";
import { phrasingContent } from "./phrasingContent";
import { Renderers } from "./renderers";
import { rootContent } from "./rootContent";
import { strong } from "./strong";
import { text } from "./text";

export const renderers: Renderers = {
  rootContent,
  phrasingContent,
  paragraph,
  heading,
  text,
  strong,
  delete: deleteRenderer,
  emphasis,
};
