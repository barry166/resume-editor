import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { exec } from 'child_process';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'invoke-custom-script',
      apply: 'build',
      closeBundle() {
        exec('node scripts/build-style-js.js', (error, stdout, stderr) => {
          if (error) {
            console.error('Error executing script:', stderr);
          } else {
            console.log('Script executed successfully:', stdout);
          }
        });
      }
    }
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "template",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
