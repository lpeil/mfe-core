import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'core',
        remotes: {
          login: process.env.VITE_LOGIN_URL,
          home: process.env.VITE_HOME_URL,
          pix: process.env.VITE_PIX_URL,
        },
        exposes: {
          './Templates': './src/templates/index.ts',
        },
        shared: ['react', 'react-dom', 'react-router-dom', 'styled-components']
      })
    ],
    build: {
      target: 'esnext',
    }
  })
}
