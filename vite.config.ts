import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import eruda from "vite-plugin-eruda"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), eruda(), svgr()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
})
