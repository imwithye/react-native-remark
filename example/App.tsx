import {
  ActionSheetProvider,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import { Markdown } from "@react-native-remark";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Linking,
  ScrollView,
} from "react-native";

const BASE_URL =
  "https://raw.githubusercontent.com/imwithye/react-native-remark/refs/heads/main/markdown";
const URL = `${BASE_URL}/01_markdown_basics.md`;

const HomeScreen = () => {
  const navigation = useNavigation();
  const { showActionSheetWithOptions } = useActionSheet();
  const [url, setUrl] = useState(URL);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
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
                title: "1. Markdown Basics",
                url: `${BASE_URL}/01_markdown_basics.md`,
              },
              {
                title: "2. Task List and Nested",
                url: `${BASE_URL}/02_task_list_and_nested.md`,
              },
              {
                title: "3. Table",
                url: `${BASE_URL}/03_table_example.md`,
              },
              {
                title: "4. Math and Code",
                url: `${BASE_URL}/04_math_and_code.md`,
              },
              {
                title: "5. Sample Article",
                url: `${BASE_URL}/05_article.md`,
              },
              {
                title: "6. PyTorch Tutorial",
                url: `${BASE_URL}/06_pytorch.md`,
              },
              {
                title: "7. Image",
                url: `${BASE_URL}/07_image.md`,
              },
              {
                title: "8. GFM",
                url: `${BASE_URL}/08_gfm.md`,
              },
              {
                title: "9. Load from URL",
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
                    setUrl(url);
                  });
                  return;
                }
                setUrl(options[idx].url);
              },
            );
          }}
        />
      ),
    });
  }, [navigation, showActionSheetWithOptions, setUrl]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, [url]);

  return (
    <ScrollView style={{ flex: 1, padding: 8, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Markdown
          markdown={markdown}
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
