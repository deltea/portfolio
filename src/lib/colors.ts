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
    name: "catppuccin",
    colors: {
      accent: "#dea0ae",
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
    name: "rose pine",
    colors: {
      accent: "#e1bdba",
      foreground: "#e0def4",
      background: "#191724",
      muted: "#26233a"
    }
  },
  {
    name: "dracula",
    colors: {
      accent: "#ff79c6",
      foreground: "#f8f8f2",
      background: "#262130",
      muted: "#433658"
    }
  },
  {
    name: "synthwave",
    colors: {
      accent: "#c759ac",
      foreground: "#f7f7fb",
      background: "#2b213a",
      muted: "#3c3146"
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
