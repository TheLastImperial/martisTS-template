import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      ui: "/src/ui",
      assets: "/src/assets",
      components: "/src/components",
    },
  },
})
