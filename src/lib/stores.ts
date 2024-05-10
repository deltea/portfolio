import { writable } from "svelte/store";

export const themes = ["bumblebee", "rust", "bittersweet"] as const;
export type Theme = (typeof themes)[number];

export const currentTheme = writable<Theme>("bumblebee");
currentTheme.subscribe(value => {
  document.documentElement.setAttribute("data-theme", value);
  console.log(value);
});
