import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    // to keep the same output directory for the build as we had before with create-react-app.
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
