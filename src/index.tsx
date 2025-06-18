import { useMarkdownContext } from "./context";
import { Markdown } from "./markdown";
import { RenderFunc, RendererArgs, Renderers } from "./renderers/renderers";
import { defaultTheme } from "./themes";

export const themes = {
  defaultTheme,
};

export { Markdown, useMarkdownContext, Renderers, RenderFunc, RendererArgs };
