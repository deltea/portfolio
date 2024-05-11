import { writable } from "svelte/store";
import type { Theme } from "$lib/types";
import { themes } from "$lib/themes";
import { pickRandom } from "$lib/utils";

const storedTheme = themes.find(theme => theme.name === localStorage.getItem("theme"));
const themeChanged = localStorage.getItem("theme_changed");
const randomTheme = pickRandom<Theme>(themes);
let theme = randomTheme;
if (themeChanged && storedTheme) {
  theme = storedTheme;
}

export const currentTheme = writable<Theme>(theme);
currentTheme.subscribe(value => {
  document.documentElement.setAttribute("data-theme", value.name);
  localStorage.setItem("theme", value.name);
});
