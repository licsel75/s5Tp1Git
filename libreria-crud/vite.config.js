import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // agrego tailwindcss

export default defineConfig({
  plugins: [react(), tailwindcss()], // agrego tailwindcss
})