![](./docs/hero-banner.png)

<p align="center">
  <a href="https://github.com/imwithye/react-native-remark/actions/workflows/build.yml">
    <picture>
      <img src="https://github.com/imwithye/react-native-remark/actions/workflows/build.yml/badge.svg?branch=main" />
    </picture>
  </a>
  <a href="https://www.npmjs.com/package/react-native-remark">
    <picture>
      <img src="https://img.shields.io/npm/v/react-native-remark" />
    </picture>
  </a>
  <a href="https://www.npmjs.com/package/react-native-remark">
    <picture>
      <img src="https://img.shields.io/npm/dw/react-native-remark" />
    </picture>
  </a>
  <a href="https://www.npmjs.com/package/react-native-remark">
    <picture>
      <img src="https://img.shields.io/npm/types/react-native-remark" />
    </picture>
  </a>
  <a href="https://github.com/imwithye/react-native-remark/blob/main/LICENSE">
    <picture>
      <img src="https://img.shields.io/github/license/imwithye/react-native-remark" />
    </picture>
  </a>
</p>

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
            // Checkout https://github.com/imwithye/react-native-remark/blob/main/src/renderers/index.tsx
            // for the default renderers.
            ...
        }}
        customStyles={{
            // Override default styles
            // Checkout https://github.com/imwithye/react-native-remark/blob/main/src/themes/default.tsx
            // for the default styles.
            ...
        }}
        onCodeCopy={(code) => Clipboard.setStringAsync(code)}
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

## Star History

<a href="https://www.star-history.com/#imwithye/react-native-remark&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=imwithye/react-native-remark&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=imwithye/react-native-remark&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=imwithye/react-native-remark&type=Date" width="100%" />
 </picture>
</a>

