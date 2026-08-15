import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { federation } from "@module-federation/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "http://localhost:5001/",

  plugins: [
    react(),

    tailwindcss(),

    federation({
      name: "Products",
      filename: "remoteEntry.js",

      exposes: {
        "./Products": "./src/ProductsRoutes.jsx",
      },

      dts: false,

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 5001,
  },
});