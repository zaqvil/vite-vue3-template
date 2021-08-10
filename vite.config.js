/*
 * @Author: zaqvil
 * @Date: 2021-08-09 16:32:52
 * @FilePath: \cli\vite-vue3-template\vite.config.js
 * @LastEditTime: 2021-08-10 12:26:29
 * @LastEditors: zaqvil
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import gzipPlugin from 'rollup-plugin-gzip'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), gzipPlugin()],
  server: {
    open: '/',
    proxy: {
      '/api': {
        target: 'http://192.168.0.1:80',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, '')
      },
    },
    build: {
    terserOptions: { compress: { drop_console: true } },
    output:{
        manualChunks: {
          vue: ['vue'],
          axios: ['axios'],
        }
      }
    }
  },
})
