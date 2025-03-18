import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true, // Abre o relatório automaticamente após o build
    }),
  ],
  build: {
    target: "es2020", // ou 'esnext'
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Exemplo de code splitting para dependências grandes
        },
      },
    },
  },
});
