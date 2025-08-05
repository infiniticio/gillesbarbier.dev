import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    ssr: true,
    outDir: 'dist',
    emptyOutDir: false, // Don't empty the dist directory
    rollupOptions: {
      input: './src/entry-server.tsx',
      output: {
        format: 'esm',
        entryFileNames: 'entry-server.js',
      },
    },
  },
});