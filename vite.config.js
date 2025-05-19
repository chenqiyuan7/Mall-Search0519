import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: "8080",
    hmr: {
      overlay: false
    }
  },
  plugins: [react()],
  base: '/Mall-search/',  // 为GitHub Pages设置正确的base路径
  build: {
    outDir: 'dist',
    emptyOutDir: true,  // 构建前清空输出目录
    sourcemap: false,   // 不生成 sourcemap 以减小文件大小
    assetsInlineLimit: 4096,  // 小于4kb的资源内联为base64
    minify: 'terser',   // 使用 terser 进行压缩
    terserOptions: {
      compress: {
        drop_console: false,  // 保留 console.* 以便调试
        drop_debugger: true,  // 删除 debugger 语句
      }
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
});
