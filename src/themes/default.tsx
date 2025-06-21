import { Platform } from "react-native";

import { Theme } from "./themes";

export const defaultTheme: Theme = {
  global: {
    container: {
      gap: 10,
    },
    borderColor: "#eeeeee",
    blockquote: {
      borderLeftWidth: 3,
      borderLeftColor: "#444444",
      backgroundColor: "#f5f5f5",
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      gap: 5,
    },
    delete: {
      textDecorationLine: "line-through",
    },
    emphasis: {
      fontStyle: "italic",
    },
    footnoteDefinition: {
      color: "#444444",
    },
    footnoteReference: {
      fontStyle: "italic",
      fontSize: 10,
      color: "#444444",
    },
    heading: (level: number) => {
      const fontSize = 28 - level * 2;
      const fontWeight = level <= 3 ? "bold" : "semibold";
      const marginVertical = level <= 3 ? 4 : 2;
      return { fontSize, fontWeight, marginVertical };
    },
    inlineCode: {
      fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
      backgroundColor: "#f5f5f5",
    },
    image: {
      borderRadius: 5,
    },
    codeBlock: {
      headerBackgroundColor: "#f5f5f5",
      contentBackgroundColor: "#fcfcfc",
      headerTextStyle: {
        fontSize: 14,
      },
      contentTextStyle: {
        fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
        fontSize: 14,
      },
    },
    linkReference: {
      color: "#007AFF",
    },
    link: {
      color: "#007AFF",
    },
    list: {
      gap: 5,
    },
    listItem: {
      flex: 1,
      gap: 5,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 24,
    },
    tableCell: {
      fontSize: 14,
      lineHeight: 20,
    },
    strong: {
      fontWeight: "bold",
    },
    thematicBreak: {
      marginVertical: 10,
      height: 1,
      backgroundColor: "#eeeeee",
    },
  },
  light: {},
  dark: {},
};
