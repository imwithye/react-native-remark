import { Platform } from "react-native";

import { Theme } from "./themes";

const fontFamily = Platform.select({ ios: "Menlo", android: "monospace" });
const light = {
  primaryColor: "#000000",
  darkColor: "#444444",
  linkColor: "#007AFF",
  bgColor: "#eeeeee",
  bgColor0: "#f9f9f9",
  bgColor1: "#f5f5f5",
};

export const defaultTheme: Theme = {
  global: {
    container: {
      gap: 10,
    },
    borderColor: light.bgColor,
    blockquote: {
      borderLeftWidth: 3,
      borderLeftColor: light.darkColor,
      backgroundColor: light.bgColor1,
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
      color: light.darkColor,
    },
    footnoteReference: {
      fontStyle: "italic",
      fontSize: 10,
      color: light.darkColor,
    },
    heading: (level: number) => {
      const fontSize = 28 - level * 2;
      const fontWeight = level <= 3 ? "bold" : "500";
      const marginVertical = level <= 3 ? 4 : 2;
      return { fontSize, fontWeight, marginVertical };
    },
    inlineCode: {
      fontFamily: fontFamily,
      backgroundColor: light.bgColor0,
    },
    image: {
      borderRadius: 5,
    },
    codeBlock: {
      headerBackgroundColor: light.bgColor1,
      contentBackgroundColor: light.bgColor0,
      headerTextStyle: {
        fontSize: 14,
      },
      contentTextStyle: {
        fontFamily: fontFamily,
        fontSize: 14,
      },
    },
    linkReference: {
      color: light.linkColor,
    },
    link: {
      color: light.linkColor,
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
      backgroundColor: light.bgColor,
    },
  },
  light: {},
  dark: {},
};
