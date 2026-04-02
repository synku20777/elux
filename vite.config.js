import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const githubPagesBase = '/elux/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE_PATH ?? (command === 'build' ? githubPagesBase : '/'),
  plugins: [svelte()],
}))
