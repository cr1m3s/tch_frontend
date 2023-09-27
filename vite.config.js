import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        families: [
          'Montserrat', 'Nunito Sans', 'Inter',

        ],
      },
      custom: {
        families: [{
          name: 'Neue Machina',
          local: 'Neue Machina',
          src: './src/styles/fonts/*.ttf',
          transform(font) {
            if (font.basename === 'NeueMachina-Bold') {
              font.weight = 700
            }
            return font;
          }
        }],
        display: 'auto',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      }
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
  }
})