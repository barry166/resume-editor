import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts({
    //   insertTypesEntry: true, // 这会在输出目录中生成一个 .d.ts 文件
    //   // 其他配置项如需要可以在这里添加
    // }),
  ],
  build: {
    outDir: "dist",
    // 库模式配置
    lib: {
      entry: "src/index.ts", // 你的库入口文件
      name: "TemplateUI",
      formats: ["es", "umd"],
      // 输出的文件名，可以根据需要在下方自定义
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你的库中不需要打包的依赖
      external: ["react", "react-dom"],
      output: {
        // 为你的库提供全局变量名称
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
