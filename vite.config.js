import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production domain is https://powerproviderservices.com/ (root) — base
// stays at the default '/'. (Previously subpath-deployed at
// demos.easyprodigital.com/power-provider-services for preview; that
// deployment is retired now that the real domain is live.)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
