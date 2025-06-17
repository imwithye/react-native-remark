import { defineConfig } from "tsup"

const banner = `// GitHub: https://github.com/imwithye/react-native-remark`

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm"],
  target: "es2016",
  banner: {
    js: banner
  }
})