import { ColorValue, TextStyle, ViewStyle } from "react-native";

export interface Styles {
  container: ViewStyle;
  borderColor: ColorValue;
  blockquote: ViewStyle;
  break: ViewStyle;
  delete: TextStyle;
  emphasis: TextStyle;
  heading: (level: number) => TextStyle;
  inlineCode: TextStyle;
  codeBlock: TextStyle;
  linkReference: TextStyle;
  link: TextStyle;
  list: ViewStyle;
  listItem: ViewStyle;
  paragraph: TextStyle;
  strong: TextStyle;
  tableCell: TextStyle;
  text: TextStyle;
  thematicBreak: ViewStyle;
}

export interface Theme {
  global?: Partial<Styles>;
  light?: Partial<Styles>;
  dark?: Partial<Styles>;
}

export const mergeStyles = <T extends ViewStyle | TextStyle | undefined>(
  ...styles: T[]
): T => {
  return styles.reduce((acc, style) => {
    return { ...acc, ...style };
  }, {} as T);
};
