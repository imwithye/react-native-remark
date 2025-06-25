import { ColorValue, Platform, TextStyle } from "react-native";

import { Theme } from "./themes";

const fontFamily = Platform.select({
  ios: "Georgia",
  android: "serif",
});
const monospaceFontFamily = Platform.select({
  ios: "Menlo",
  android: "monospace",
});

const light = {
  primaryColor: "#000000",
  darkColor: "#444444",
  linkColor: "#007AFF",
  borderColor: "#eeeeee",
  bgColorLight: "#f9f9f9",
  bgColorHeavy: "#f5f5f5",
};
const dark = {
  primaryColor: "#ffffff",
  darkColor: "#bbbbbb",
  linkColor: "#007AFF",
  borderColor: "#222222",
  bgColorLight: "#070707",
  bgColorHeavy: "#0b0b0b",
};

const headingHandler = (color: ColorValue) => {
  return (level: number): TextStyle => {
    const fontSize = 28 - level * 2;
    const fontWeight = level <= 3 ? "bold" : "500";
    const marginVertical = level <= 3 ? 4 : 2;
    return { fontFamily, fontSize, fontWeight, marginVertical, color };
  };
};

export const serifTheme: Theme = {
  global: {
    blockquote: {
      borderLeftWidth: 3,
      borderLeftColor: light.darkColor,
      backgroundColor: light.bgColorHeavy,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 5,
      gap: 5,
    },
    borderColor: light.borderColor,
    break: {},
    codeBlock: {
      headerBackgroundColor: light.bgColorHeavy,
      contentBackgroundColor: light.bgColorLight,
      headerTextStyle: {
        fontFamily,
        fontSize: 14,
      },
      contentTextStyle: {
        fontFamily: monospaceFontFamily,
        fontSize: 14,
      },
    },
    container: {
      gap: 10,
    },
    delete: {
      fontFamily,
      textDecorationLine: "line-through",
    },
    emphasis: {
      fontFamily,
      fontStyle: "italic",
    },
    footnoteReference: {
      fontFamily,
      fontStyle: "italic",
      fontSize: 10,
      color: light.darkColor,
    },
    heading: headingHandler(light.primaryColor),
    image: {
      borderRadius: 5,
    },
    inlineCode: {
      fontFamily: monospaceFontFamily,
      backgroundColor: light.bgColorLight,
    },
    link: {
      fontFamily,
      color: light.linkColor,
    },
    linkReference: {
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
      fontFamily,
      fontSize: 16,
      lineHeight: 24,
      color: light.primaryColor,
    },
    strong: {
      fontFamily,
      fontWeight: "bold",
    },
    tableCell: {
      fontFamily,
      fontSize: 14,
      lineHeight: 20,
    },
    text: {},
    thematicBreak: {
      marginVertical: 10,
      height: 1,
      backgroundColor: light.borderColor,
    },
  },
  light: {},
  dark: {
    blockquote: {
      borderLeftColor: dark.darkColor,
      backgroundColor: dark.bgColorHeavy,
    },
    borderColor: dark.borderColor,
    codeBlock: {
      headerBackgroundColor: dark.bgColorHeavy,
      contentBackgroundColor: dark.bgColorLight,
      headerTextStyle: {
        color: dark.primaryColor,
      },
      contentTextStyle: {
        color: dark.primaryColor,
      },
    },
    footnoteReference: {
      color: dark.darkColor,
    },
    heading: headingHandler(dark.primaryColor),
    inlineCode: {
      backgroundColor: dark.bgColorLight,
    },
    link: {
      color: dark.linkColor,
    },
    linkReference: {
      color: dark.linkColor,
    },
    paragraph: {
      color: dark.primaryColor,
    },
    tableCell: {
      color: dark.primaryColor,
    },
    thematicBreak: {
      backgroundColor: dark.borderColor,
    },
  },
};
