import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, '../../libs/ui/src/components')
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  }
})
