import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Features": path.resolve(__dirname, "src/Features"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  }
})
