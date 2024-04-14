import react from "@vitejs/plugin-react";
import path from "node:path";
import { URL, fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: [
      {
        find: "@/theme",
        replacement: fileURLToPath(new URL("./src/theme", import.meta.url))
      },
      {
        find: "@/components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url))
      }
    ]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "vite-build-issue",
      formats: ["es", "umd"],
      fileName: (format) => `vite-build-issue.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
