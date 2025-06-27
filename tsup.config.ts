import { defineConfig } from "tsup";

const banner = `// GitHub: https://github.com/imwithye/react-native-remark`;

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: false,
  clean: true,
  dts: true,
  format: ["esm"],
  target: "es2016",
  external: ["react", "react-native"],
  banner: {
    js: banner,
  },
});
