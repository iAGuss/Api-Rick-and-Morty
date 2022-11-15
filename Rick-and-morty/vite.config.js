import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://iAGuss.github.io/Api-Rick-and-Morty/",
  plugins: [react()],
});
