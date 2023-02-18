import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  , clearScreen: false
  // tauri expects a fixed port, fail if that port is not available
  , server: {
    port: 1420
    , strictPort: true,
  }
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  , envPrefix: ['VITE_', 'TAURI_']
  , build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13'
    // don't minify for debug builds
    , minify: !process.env.TAURI_DEBUG ? 'esbuild' : false
    // produce sourcemaps for debug builds
    , sourcemap: !!process.env.TAURI_DEBUG,
  }
  , resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      , '@tauri': fileURLToPath(new URL('./src-tauri', import.meta.url))
      , '@atoms':  fileURLToPath(new URL('./src/atoms', import.meta.url))
      , '@org':  fileURLToPath(new URL('./src/organisms', import.meta.url))
      , '@pages':  fileURLToPath(new URL('./src/pages', import.meta.url))
      , '@store':  fileURLToPath(new URL('./src/store', import.meta.url))
    }
  }
})
