import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // sourcemap: true, // Add sourcemap
    outDir: '../dist/', // Output in the dist/ folder
    // emptyOutDir: true, // Empty the folder first
    // plugins: [
    //     InjectCssToJsPlugin({
    //         // beforeInjectCss: cssCode => {
    //         //     return JSON.stringify(cssCode)
    //         //         .replace(/\/static\/images/g, '${window.cdnDomain}/static/images')
    //         //         .replace(/^"|"$/g, '`');
    //         // },
    //     }),
    // ],
    rollupOptions: {
      output: {
        // chunkFileNames: 'assets/js/[name]-[hash].js',
        // entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'js/app-min.js',
        entryFileNames: 'js/app-min.js',

        assetFileNames: ({names}) => {
          if (/\.(gif|jpg|jpe?g|png|svg)$/.test(names ?? '')){
            return 'images/[name][extname]';
          }

          if (/\.css$/.test(names ?? '')) {
            return 'css/app.css';
          }

          // if (/\.(woff|woff2)$/.test(name ?? '')) {
          //     return 'fonts/[name]/[name][extname]';
          // }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return '[name]-[hash][extname]';
        },
      },
    }
  },
  css: {
    devSourcemap: true
    // sourcemap: true
    // preprocessorOptions: {
    //     scss: {
    //         additionalData: `
    //             @import "./src/scss/_color.scss";
    //             @import "./src/scss/_layout.scss";
    //             @import "./src/scss/_layout.scss";
    //         `
    //     }
    // }
  }
})
