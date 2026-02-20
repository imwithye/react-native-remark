import {
  ActionSheetProvider,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import { Markdown, themes } from "@react-native-remark";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Linking,
  ScrollView,
  useColorScheme,
} from "react-native";

const { defaultTheme, githubTheme, serifTheme } = themes;

const BASE_URL =
  "https://raw.githubusercontent.com/imwithye/react-native-remark/refs/heads/main/markdown";
const URL = `${BASE_URL}/01_markdown_sample.md`;

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();
  const [markdown, setMarkdown] = useState("");
  const [theme, setTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState(false);

  const loadMarkdown = useCallback((url: string) => {
    setLoading(true);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .finally(() => setTimeout(() => setLoading(false), 1000));

    return controller;
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: colorScheme === "dark" ? "white" : "black",
      headerStyle: {
        backgroundColor: colorScheme === "dark" ? "black" : "white",
      },
      headerLeft: () => (
        <Button
          title="Theme"
          onPress={() => {
            const options = [
              {
                title: "Cancel",
                theme: null,
              },
              {
                title: "Default",
                theme: defaultTheme,
              },
              {
                title: "GitHub",
                theme: githubTheme,
              },
              {
                title: "Serif",
                theme: serifTheme,
              },
            ];
            const cancelButtonIndex = 0;
            showActionSheetWithOptions(
              {
                options: options.map((option) => option.title),
                cancelButtonIndex,
              },
              (idx?: number) => {
                if (!idx || idx === cancelButtonIndex) return;
                setTheme(options[idx].theme ?? defaultTheme);
              },
            );
          }}
        />
      ),
      headerRight: () => (
        <Button
          title="Load"
          onPress={() => {
            const options = [
              {
                title: "Cancel",
                url: "",
              },
              {
                title: "1. Markdown",
                url: `${BASE_URL}/01_markdown_sample.md`,
              },
              {
                title: "2. Table",
                url: `${BASE_URL}/02_table_example.md`,
              },
              {
                title: "3. Article",
                url: `${BASE_URL}/03_article.md`,
              },
              {
                title: "4. PyTorch",
                url: `${BASE_URL}/04_pytorch.md`,
              },
              {
                title: "5. Load from URL",
                url: "",
              },
            ];
            const cancelButtonIndex = 0;
            showActionSheetWithOptions(
              {
                options: options.map((option) => option.title),
                cancelButtonIndex,
              },
              (idx?: number) => {
                if (!idx || idx === cancelButtonIndex) return;

                if (idx === options.length - 1) {
                  Alert.prompt("Load Markdown from URL", "", (url) => {
                    loadMarkdown(url);
                  });
                  return;
                }

                loadMarkdown(options[idx].url);
              },
            );
          }}
        />
      ),
    });
  }, [
    colorScheme,
    navigation,
    showActionSheetWithOptions,
    setTheme,
    loadMarkdown,
  ]);

  useEffect(() => {
    const controller = loadMarkdown(URL);

    return controller.abort;
  }, [loadMarkdown]);

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 8,
        backgroundColor: colorScheme === "dark" ? "black" : "white",
      }}
    >
      <StatusBar style="auto" />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Markdown
          markdown={markdown}
          theme={theme}
          onLinkPress={(url) => Linking.openURL(url)}
        />
      )}
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
  return (
    <ActionSheetProvider>
      <Navigation />
    </ActionSheetProvider>
  );
}
