import { browser } from "$app/environment";
import { writable } from "svelte/store";

interface Palette {
  name: string;
  colors: {
    accent: string;
    foreground: string;
    background: string;
    muted: string;
  }
}

export const palettes: Palette[] = [
  {
    name: "catpuccin",
    colors: {
      accent: "#b4befe",
      foreground: "#cdd6f4",
      background: "#1e1e2e",
      muted: "#313244"
    }
  },
  {
    name: "mirage",
    colors: {
      accent: "#f1d44b",
      foreground: "#cbcdc2",
      background: "#212233",
      muted: "#2a2c3c"
    }
  },
  {
    name: "ocean",
    colors: {
      accent: "#06aed5",
      foreground: "#f0f3bd",
      background: "#1b262c",
      muted: "#0b3948"
    }
  }
];

export const currentPalettte = writable<Palette>(palettes[0]);
currentPalettte.subscribe(newPalette => {
  if (!browser) return;
  console.log(newPalette);
  document.documentElement.style.setProperty("--color-accent", newPalette.colors.accent);
  document.documentElement.style.setProperty("--color-foreground", newPalette.colors.foreground);
  document.documentElement.style.setProperty("--color-background", newPalette.colors.background);
  document.documentElement.style.setProperty("--color-muted", newPalette.colors.muted);
});
