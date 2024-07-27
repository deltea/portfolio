import { browser } from "$app/environment";
import { writable } from "svelte/store";

interface Palette {
  name: string;
  colors: {
    accent: string;
    foreground: string;
    background: string;
    muted: string;
    secondary: string;
    mutedText: string;
  }
}

export const palettes: Palette[] = [
  {
    name: "catppuccin",
    colors: {
      accent: "#dea0ae",
      foreground: "#cdd6f4",
      background: "#1e1e2e",
      muted: "#313244",
      secondary: "#5c5f77",
      mutedText: "#6c6f8c",
    }
  },
  {
    name: "mirage",
    colors: {
      accent: "#f1d44b",
      foreground: "#cbcdc2",
      background: "#212233",
      muted: "#4b505f",
      secondary: "#424558",
      mutedText: "#6b6c87",
    }
  },
  {
    name: "rose pine",
    colors: {
      accent: "#e1bdba",
      foreground: "#e0def4",
      background: "#191724",
      muted: "#26233a",
      secondary: "#6d6f9c",
      mutedText: "#6e6a86",
    }
  },
  {
    name: "dracula",
    colors: {
      accent: "#ed70ce",
      foreground: "#eaebe5",
      background: "#292837",
      muted: "#363548",
      secondary: "#b47df4",
      mutedText: "#625985",
    }
  },
];

export const currentPalettte = writable<Palette>(palettes[0]);
currentPalettte.subscribe(newPalette => {
  if (!browser) return;
  console.log(newPalette);
  document.documentElement.style.setProperty("--color-accent", newPalette.colors.accent);
  document.documentElement.style.setProperty("--color-foreground", newPalette.colors.foreground);
  document.documentElement.style.setProperty("--color-background", newPalette.colors.background);
  document.documentElement.style.setProperty("--color-muted", newPalette.colors.muted);
  document.documentElement.style.setProperty("--color-secondary", newPalette.colors.secondary);
  document.documentElement.style.setProperty("--color-muted-text", newPalette.colors.mutedText);
});
