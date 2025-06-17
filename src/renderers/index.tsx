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
  text,
  strong,
};
