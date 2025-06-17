# react-native-remark

A flexible React Native component for rendering Markdown content, with full support for GitHub Flavored Markdown (GFM).

## Features

- 📄 **Render Markdown in React Native**  
  Display Markdown content seamlessly in your React Native apps.
- 🚀 **GitHub Flavored Markdown (GFM) Support**  
  Enjoy tables, task lists, strikethrough, and more.
- 🖼️ **Rich Content Handling**  
  Supports links, images, code blocks, blockquotes, and other common Markdown elements.
- 🛠️ **Customizable Renderer System**  
  Easily override or extend how Markdown elements are rendered.

## Installation

```sh
npm install react-native-remark
```

## Usage

```jsx
import React from 'react';
import { Markdown } from 'react-native-remark';

const markdown = `
# Hello World! 👋

This is a **Markdown** example with [a link](https://reactnative.dev).

- List item 1
- List item 2
`;

export default function App() {
  return <Markdown markdown={markdown} />;
}
```

## License

MIT
