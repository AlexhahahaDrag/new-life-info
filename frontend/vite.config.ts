import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import svgLoader from 'vite-svg-loader';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    createSvgIconsPlugin({
      iconDirs: [
        resolve(
          path.resolve('src/assets', 'src/assets/icons', 'src/assets/menu', 'src/assets/logo'),
        ),
      ],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last', //body-last|body-first默认body-last
      customDomId: '__svg__icons__dom__', //默认__svg__icons__dom__
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ],
      dts: 'src/components.d.ts',
      dirs: ['src/views', 'src/layout', 'src/router', 'src/components'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    // compression({
    //   algorithm: 'gzip', // 压缩算法
    //   ext: '.gz', // 文件类型
    //   deleteOriginFile: false, // 是否删除原文件
    //   threshold: 10240, // 压缩前最小文件大小（字节）
    // }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        sourcemap: false,
        manualChunks: undefined, // 禁用手动代码拆分
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
