// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio_react/',   // keep this for production

  server: {
    historyApiFallback: true,   // ← this is the magic line for dev
  },
})