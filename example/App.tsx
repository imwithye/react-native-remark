import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Linking, ScrollView } from "react-native";
import { Markdown } from "react-native-remark";

const URL =
  "https://raw.githubusercontent.com/imwithye/react-native-remark/refs/heads/main/markdown/05_article.md";

const HomeScreen = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <ScrollView style={{ flex: 1, padding: 8, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <Markdown
        markdown={markdown}
        onLinkPress={(url) => Linking.openURL(url)}
      />
    </ScrollView>
  );
};

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
