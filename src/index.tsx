import { useMarkdownContext } from "./context";
import { Markdown } from "./markdown";
import { RenderFunc, RendererArgs, Renderers } from "./renderers";
import { defaultTheme, typewritter } from "./themes";

export const themes = {
  defaultTheme,
  typewritter,
};

export { Markdown, useMarkdownContext, Renderers, RenderFunc, RendererArgs };
