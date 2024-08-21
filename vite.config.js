import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [react()],
  base: '/',
  root: './src/app',
  resolve: {
    alias: [{ find: 'app', replacement: resolve(__dirname, './src/app') }],
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: mode !== 'production',
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd'],
        },
      },
    },
  },
})
