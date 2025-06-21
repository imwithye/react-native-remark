import { ColorValue, Platform, TextStyle } from "react-native";

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
const dark = {
  primaryColor: "#ffffff",
  darkColor: "#bbbbbb",
  linkColor: "#007AFF",
  bgColor: "#222222",
  bgColor0: "#070707",
  bgColor1: "#0b0b0b",
};
const headingHandler = (color: ColorValue) => {
  return (level: number): TextStyle => {
    const fontSize = 28 - level * 2;
    const fontWeight = level <= 3 ? "bold" : "500";
    const marginVertical = level <= 3 ? 4 : 2;
    return { fontSize, fontWeight, marginVertical, color };
  };
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
      paddingRight: 5,
      gap: 5,
    },
    heading: headingHandler(light.primaryColor),
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
      color: light.primaryColor,
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
  dark: {
    borderColor: dark.bgColor,
    blockquote: {
      borderLeftColor: dark.darkColor,
      backgroundColor: dark.bgColor1,
    },
    heading: headingHandler(dark.primaryColor),
    footnoteDefinition: {
      color: dark.darkColor,
    },
    footnoteReference: {
      color: dark.darkColor,
    },
    inlineCode: {
      backgroundColor: dark.bgColor0,
    },
    codeBlock: {
      headerBackgroundColor: dark.bgColor1,
      contentBackgroundColor: dark.bgColor0,
      headerTextStyle: {
        color: dark.primaryColor,
      },
      contentTextStyle: {
        color: dark.primaryColor,
      },
    },
    linkReference: {
      color: dark.linkColor,
    },
    link: {
      color: dark.linkColor,
    },
    paragraph: {
      color: dark.primaryColor,
    },
    tableCell: {
      color: dark.primaryColor,
    },
    thematicBreak: {
      backgroundColor: dark.bgColor,
    },
  },
};
