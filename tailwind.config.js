/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        "accent": "var(--color-accent)",
        "foreground": "var(--color-foreground)",
        "background": "var(--color-background)",
        "muted": "var(--color-muted)",
      }
    },
  },
  plugins: [],
}

