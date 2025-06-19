import { Definition, Root } from "mdast";
import { createContext, useContext } from "react";

import { Renderers } from "./renderers/renderers";
import { Styles } from "./themes/themes";

export type MarkdownContextType = {
  tree: Root;
  renderers: Renderers;
  definitions: Record<string, Definition>;
  styles: Partial<Styles>;
  onLinkPress?: (url: string) => void;
};

export const MarkdownContext = createContext<MarkdownContextType | undefined>(
  undefined,
);

export const useMarkdownContext = () => {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error(
      "useMarkdownContext must be used within a MarkdownContextProvider",
    );
  }
  return context;
};

export type MarkdownContextProviderProps = {
  tree: Root;
  renderers: Renderers;
  definitions: Record<string, Definition>;
  styles: Partial<Styles>;
  onLinkPress?: (url: string) => void;
  children: React.ReactNode;
};

export const MarkdownContextProvider = ({
  tree,
  renderers,
  definitions,
  styles,
  onLinkPress,
  children,
}: MarkdownContextProviderProps) => {
  return (
    <MarkdownContext.Provider
      value={{
        tree,
        renderers,
        definitions,
        styles,
        onLinkPress,
      }}
    >
      {children}
    </MarkdownContext.Provider>
  );
};
