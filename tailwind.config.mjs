/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
      fontFamily: {
        "figtree": ["Figtree Variable", "sans"],
      },
      colors: {
        // This color will be replaced with primary color of theme
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        // This color will be replaced with dark color of theme
        "black": "rgb(var(--color-dark) / <alpha-value>)",
        // This color will be replaced with light color of theme
        "white": "rgb(var(--color-light) / <alpha-value>)",
      },
      backgroundImage: {
        "waves": "url('/waves.svg')",
        "sharp": "url('/sharp.svg')",
      }
    },
	},
	plugins: [],
}
