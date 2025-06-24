# Contributing to react-native-remark

🎉 Thank you for your interest in contributing! We welcome all PRs, issues, and feedback.

## How to Contribute

### 1. Fork & Clone

```bash
git clone https://github.com/your-username/react-native-remark.git
cd react-native-remark
pnpm install
```

### 2. Run Example Project

```bash
cd example
pnpm install
pnpm run ios  # or pnpm run android
```

### 3. Lint & Format

Before submitting a PR, make sure you pass lint with `pnpm run lint:fix`

### 4. Submit Pull Request

When you open a PR:

* Make sure your PR title follows Conventional Commits (feat:, fix:, chore: etc.)
* Link any related issues in the description
* Include:
    * ✅ A Markdown file used for testing
    * ✅ Screenshots of the rendered result
* Check all items in the PR template checklist

### 5. Local Development Tips

* Custom renderers live in `src/renderers`
* Default styles live in `src/themes/default.tsx`
* You can create a new them in `src/themes`
* All rendering logic is tested through the example app

### Code Style

We use:

* Prettier for formatting
* ESLint for linting
* TypeScript for type safety

Use `pnpm run lint:fix` to fix both lint and format issues.

### Issues

Feel free to open an issue if:

* You find a bug 🐛
* You want to request a new feature 💡
* You created a new theme 🌈
* You want help understanding how to use the library 🤔
