/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import { addIconSelectors } from '@iconify/tailwind';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui, addIconSelectors(['mdi', 'ic'])],
}
