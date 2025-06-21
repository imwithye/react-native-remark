# react-native-remark

**react-native-remark** provides elegant and powerful Markdown rendering capabilities for React Native applications.

## Features

- 📱 Render Markdown in React Native applications
- 🎯 Supports GitHub Flavored Markdown (GFM)
- 🌈 Syntax highlighting for code blocks
- 📊 Table rendering with horizontal scroll view
- 🖼️ Inline and block image rendering
- 🌙 Dark Mode support
- ⚙️ Custom renderers and styles for flexible UI customization

## Installation

```sh
npm install react-native-remark
```

## Usage

```jsx
import React from "react";
import { Markdown } from "react-native-remark";

const markdown = `
# Hello World! 👋

This is a **Markdown** example with [a link](https://reactnative.dev).

- List item 1
- List item 2
`;

export default function App() {
  return (
     <Markdown
        markdown={markdown}
        customRenderers={{
            // Override default renderers for mdast nodes.
            ...
        }}
        customStyles={{
            // Override default styles
            ...
        }}
        onLinkPress={(url) => Linking.openURL(url)}
      />
  );
}
```

## Quick Look

### Heading

<img src="docs/heading-light.png" alt="Sample Markdown Rendering" width="320" /> <img src="docs/heading-dark.png" alt="Sample Markdown Rendering" width="320" />

### List

<img src="docs/list-light.png" alt="Sample Markdown Rendering" width="320" /> <img src="docs/list-dark.png" alt="Sample Markdown Rendering" width="320" />

### Code Block

<img src="docs/code-light.png" alt="Sample Markdown Rendering" width="320" /> <img src="docs/code-dark.png" alt="Sample Markdown Rendering" width="320" />

### Table Block

<img src="docs/table-light.png" alt="Sample Markdown Rendering" width="320" /> <img src="docs/table-dark.png" alt="Sample Markdown Rendering" width="320" />

## Development

```
pnpm i
cd example && pnpm i && pnpm run ios
```
