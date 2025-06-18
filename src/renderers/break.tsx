import { ReactNode } from "react";
import { View, useColorScheme } from "react-native";

import { useMarkdownContext } from "../context";
import { themedStyle } from "../themes/themes";

export const BreakRenderer = (): ReactNode => {
  const colorScheme = useColorScheme();
  const { theme } = useMarkdownContext();

  return <View style={themedStyle(theme, colorScheme, "BreakStyle")} />;
};
