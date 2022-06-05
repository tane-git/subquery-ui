import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    lib: {
      entry: "index.ts",
      name: "ComponentLib",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@', replacement: resolve(__dirname, 'src')
      }
    ]
  }
});
