import { ColorValue, Platform, TextStyle } from "react-native";

import { Theme } from "../themes";
import { HeadingRenderer } from "./heading";
import { TableCellRenderer, TableRenderer, TableRowRenderer } from "./table";

const monospaceFontFamily = Platform.select({
  ios: "Menlo",
  android: "monospace",
});

const light = {
  primaryColor: "#000000",
  darkColor: "#d1d9e0",
  linkColor: "#007AFF",
  borderColor: "#eeeeee",
  bgColorLight: "#f9f9f9",
  bgColorHeavy: "#f5f5f5",
};
const dark = {
  primaryColor: "#ffffff",
  darkColor: "#bbbbbb",
  linkColor: "#007AFF",
  borderColor: "#3d444d",
  bgColorLight: "#151b23",
  bgColorHeavy: "#0b0b0b",
};

const headingHandler = (color: ColorValue) => {
  return (level: number): TextStyle => {
    const fontSize = 32 - level * 2;
    const fontWeight = level <= 3 ? "bold" : "500";
    const marginVertical = level <= 3 ? 4 : 2;
    return { fontSize, fontWeight, marginVertical, color };
  };
};

export const githubTheme: Theme = {
  global: {
    blockquote: {
      borderLeftWidth: 3,
      borderLeftColor: light.darkColor,
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
      textDecorationLine: "line-through",
    },
    emphasis: {
      fontStyle: "italic",
    },
    footnoteReference: {
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
      fontSize: 16,
      lineHeight: 24,
      color: light.primaryColor,
    },
    strong: {
      fontWeight: "bold",
    },
    tableCell: {
      fontSize: 14,
      lineHeight: 20,
      backgroundColor: light.bgColorLight,
    },
    text: {},
    thematicBreak: {
      marginVertical: 10,
      height: 5,
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
      backgroundColor: dark.bgColorLight,
    },
    thematicBreak: {
      backgroundColor: dark.borderColor,
    },
  },
  renderers: {
    HeadingRenderer,
    TableRenderer,
    TableRowRenderer,
    TableCellRenderer,
  },
};
