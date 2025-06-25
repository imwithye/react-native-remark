import { useMarkdownContext } from "./context";
import { Markdown } from "./markdown";
import { RenderFunc, RendererArgs, Renderers } from "./renderers";
import { Theme, defaultTheme, typewriterTheme } from "./themes";

export const themes = {
  defaultTheme,
  typewriterTheme,
};

export {
  Markdown,
  useMarkdownContext,
  Renderers,
  RenderFunc,
  RendererArgs,
  Theme,
};
