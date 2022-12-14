import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8248,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@plugins': path.resolve(__dirname, './src/plugins'),
    },
  },
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue'],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: any) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          else if (/mp4|wav|mp3/i.test(extType)) {
            extType = 'media';
          }
          else if (/css/i.test(extType)) {
            extType = 'styles';
          }
          else if (/eot|ttf|woff|woff2|ttc|otf/i.test(extType)) {
            extType = 'fonts';
          } else {
            extType = 'files';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
})
