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
  Renderers,
  RenderFunc,
  RendererArgs,
  Theme,
};
