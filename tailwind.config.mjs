/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
      fontFamily: {
        "figtree": ["Figtree Variable", "sans"],
      },
      colors: {
        "bumblebee": "#eda031"
      },
      backgroundImage: {
        "waves": "url('/waves.svg')",
        "sharp": "url('/sharp.svg')",
      }
    },
	},
	plugins: [],
}
