import { TextStyle, ViewStyle } from "react-native";

export interface Styles {
  container: ViewStyle;
  blockquote: ViewStyle;
  break: ViewStyle;
  delete: TextStyle;
  emphasis: TextStyle;
  heading: (level: number) => TextStyle;
  inlineCode: TextStyle;
  linkReference: TextStyle;
  link: TextStyle;
  list: ViewStyle;
  listItemMarker: TextStyle;
  listItemContainer: ViewStyle;
  paragraph: TextStyle;
  strong: TextStyle;
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
