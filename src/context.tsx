import { Definition, Root } from "mdast";
import { Renderers } from "./renderers/renderers";
import { createContext, useContext } from "react";

export type MarkdownContextType = {
  tree: Root;
  renderers: Renderers;
  definitions: Record<string, Definition>;
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
  children: React.ReactNode;
};

export const MarkdownContextProvider = ({
  tree,
  renderers,
  definitions,
  children,
}: MarkdownContextProviderProps) => {
  return (
    <MarkdownContext.Provider value={{ tree, renderers, definitions }}>
      {children}
    </MarkdownContext.Provider>
  );
};
