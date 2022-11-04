import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, 'src', 'lib'),
			$src: path.resolve(__dirname, 'src'),
			$root: path.resolve(__dirname)
		},
	},
	plugins: [
		svelte({
			preprocess: preprocess({
				postcss: true,
				scss: true,
			}),
		}),
	]
})
