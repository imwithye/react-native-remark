import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { View } from "react-native";

import { renderers } from "./renderers";

const parser = unified().use(remarkParse).use(remarkGfm);

export type MarkdownProps = {
  children: string;
};

export const Markdown = ({ children }: MarkdownProps) => {
  const parent = parser.parse(children);
  return (
    <View>
      {parent.children.map((node, index) =>
        renderers.rootContent({ node, index, renderers, parent }),
      )}
    </View>
  );
};

export default Markdown;
