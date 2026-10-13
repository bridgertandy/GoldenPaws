import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    open: true,
  },
  // GitHub Pages serves the site from /GoldenPaws/, Netlify serves it from the root
  base: process.env.NETLIFY ? "/" : "/GoldenPaws/",
});
