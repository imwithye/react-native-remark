import { useMarkdownContext } from "./context";
import { Markdown } from "./markdown";
import { RenderFunc, RendererArgs, Renderers } from "./renderers";
import { Theme, defaultTheme, serifTheme } from "./themes";

export const themes = {
  defaultTheme,
  serifTheme,
};

export {
  Markdown,
  useMarkdownContext,
  type Renderers,
  type RenderFunc,
  type RendererArgs,
  type Theme,
};
