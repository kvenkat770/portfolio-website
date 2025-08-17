import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'username' and 'repo-name' to your GitHub repo details
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/'
})
