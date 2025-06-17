import { Root } from "mdast";
import { Text } from "react-native";

export const renderer = (root: Root) => {
  return <Text>Hello, world!</Text>;
};