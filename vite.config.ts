import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ts_path from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), ts_path() ],
})
