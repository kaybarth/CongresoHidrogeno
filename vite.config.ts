import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CongresoHidrogeno/',
  plugins: [vue()],
  server: {
    host: true
  }
})
