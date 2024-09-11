import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://cassioluciano98.github.io/Projeto-Cadastro-de-Usuarios---React-Vite/",
  plugins: [react()],
})
