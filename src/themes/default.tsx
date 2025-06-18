import { Platform } from "react-native";

import { Theme } from "./themes";

export const defaultTheme: Theme = {
  global: {
    DefaultContainerStyle: {
      gap: 10,
    },
    BlockquoteStyle: {
      borderLeftWidth: 3,
      borderLeftColor: "#444444",
      backgroundColor: "#f5f5f5",
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      gap: 5,
    },
    DeleteStyle: {
      textDecorationLine: "line-through",
    },
    EmphasisStyle: {
      fontStyle: "italic",
    },
    HeadingStyle: (level: number) => {
      const fontSize = 32 - level * 2;
      const fontWeight = level <= 3 ? "bold" : "semibold";
      const marginVertical = level <= 3 ? 4 : 2;
      return { fontSize, fontWeight, marginVertical };
    },
    InlineCodeStyle: {
      fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
      backgroundColor: "#f5f5f5",
    },
    LinkReferenceStyle: {
      color: "#007AFF",
    },
    LinkStyle: {
      color: "#007AFF",
    },
    ListStyle: {
      gap: 5,
    },
    ListItemMarkerStyle: {
      marginRight: 5,
      fontSize: 16,
      lineHeight: 24,
    },
    ListItemContainerStyle: {
      flex: 1,
      gap: 5,
    },
    ParagraphStyle: {
      fontSize: 16,
      lineHeight: 24,
    },
    StrongStyle: {
      fontWeight: "bold",
    },
    ThematicBreakStyle: {
      marginVertical: 10,
      height: 1,
      backgroundColor: "#eeeeee",
    },
  },
  light: {},
  dark: {},
};
