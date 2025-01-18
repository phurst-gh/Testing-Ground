import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = env.VITE_API_BASE_URL;
  console.log(apiBaseUrl);

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: apiBaseUrl,
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
})
