import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at https://demos.easyprodigital.com/power-provider-services/ —
// base must match so built asset URLs (JS/CSS) resolve under that subpath.
// See BrowserRouter's matching `basename` in src/App.jsx.
// https://vite.dev/config/
export default defineConfig({
  base: '/power-provider-services/',
  plugins: [react()],
})
