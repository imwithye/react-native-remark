import { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

import { useMarkdownContext } from "../context";

export const BreakRenderer = (): ReactNode => {
  const { styles } = useMarkdownContext();

  return <Text style={styles.break as StyleProp<TextStyle>}>{"\n"}</Text>;
};
