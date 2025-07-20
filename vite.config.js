import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
      special: ['Great Vibes', 'serif'],
         // Define your special font
      },
    },

  },
  important:true,
  plugins: [
    tailwindcss(),
  ],
})