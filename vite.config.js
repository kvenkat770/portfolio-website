import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "portfolio-website" with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',  
})
