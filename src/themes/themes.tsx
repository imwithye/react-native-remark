import { TextStyle, ViewStyle } from "react-native";

export interface Styles {
  DefaultContainerStyle: ViewStyle;
  BlockquoteStyle: ViewStyle;
  BreakStyle: ViewStyle;
  DeleteStyle: TextStyle;
  EmphasisStyle: TextStyle;
  HeadingStyle: (level: number) => TextStyle;
  InlineCodeStyle: TextStyle;
  LinkReferenceStyle: TextStyle;
  LinkStyle: TextStyle;
  ListStyle: ViewStyle;
  ListItemMarkerStyle: TextStyle;
  ListItemContainerStyle: ViewStyle;
  ParagraphStyle: TextStyle;
  StrongStyle: TextStyle;
  TextStyle: TextStyle;
  ThematicBreakStyle: ViewStyle;
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
