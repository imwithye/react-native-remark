import { ReactNode } from "react";
import { View } from "react-native";

import { useMarkdownContext } from "../context";

export const BreakRenderer = (): ReactNode => {
  const { styles } = useMarkdownContext();

  return <View style={styles.break} />;
};
