import { ColorValue, ImageStyle, TextStyle, ViewStyle } from "react-native";

export type CodeBlockStyle = {
  headerBackgroundColor?: ColorValue;
  contentBackgroundColor?: ColorValue;
  headerTextStyle?: TextStyle;
  contentTextStyle?: TextStyle;
};

export interface Styles {
  container: ViewStyle;
  borderColor: ColorValue;
  blockquote: ViewStyle;
  break: ViewStyle;
  delete: TextStyle;
  emphasis: TextStyle;
  footnoteDefinition: TextStyle;
  footnoteReference: TextStyle;
  heading: (level: number) => TextStyle;
  inlineCode: TextStyle;
  image: ImageStyle;
  codeBlock: CodeBlockStyle;
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

function isObject<T>(obj: T): obj is T & object {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}

export function deepMerge<T>(target: T, source: T): T {
  const result = { ...target };
  for (const key in source) {
    if (isObject(source[key]) && isObject(result[key])) {
      result[key] = deepMerge(result[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

export const mergeStyles = <T extends ViewStyle | TextStyle | CodeBlockStyle>(
  ...styles: T[]
): T => {
  return styles.reduce((acc, style) => {
    return deepMerge(acc, style);
  }, {} as T);
};
