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
        "muted-text": "var(--color-muted-text)",
        "secondary": "var(--color-secondary)",
      },
      borderWidth: {
        "3": "3px",
      },
      fontFamily: {
        "ubuntu": ["Ubuntu Sans Mono Variable", "monospace"],
      }
    },
  },
  plugins: [],
}

