import { Definition, Root } from "mdast";
import { Renderers } from "./renderers/renderers";
import { createContext, useContext } from "react";

export type MarkdownContextType = {
  tree: Root;
  renderers: Renderers;
  definitions: Record<string, Definition>;
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
  onLinkPress?: (url: string) => void;
  children: React.ReactNode;
};

export const MarkdownContextProvider = ({
  tree,
  renderers,
  definitions,
  onLinkPress,
  children,
}: MarkdownContextProviderProps) => {
  return (
    <MarkdownContext.Provider
      value={{ tree, renderers, definitions, onLinkPress }}
    >
      {children}
    </MarkdownContext.Provider>
  );
};
