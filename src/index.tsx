import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { View } from "react-native";

import { renderer } from "./renderer";

const parser = unified().use(remarkParse).use(remarkGfm);

export type MarkdownProps = {
  children: string;
};

export const Markdown = ({ children }: MarkdownProps) => {
  const tree = parser.parse(children);
  return <View>{renderer(tree)}</View>;
};

export default Markdown;
