import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
const forGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPO_NAME || 'heisenberg-s-lab'
export default defineConfig({
  base: forGitHubPages ? `/${repoName}/` : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 43123,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43123,
    allowedHosts: true,
  },
})
