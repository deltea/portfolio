import { writable } from "svelte/store";
import type { Theme } from "$lib/types";
import { themes } from "$lib/themes";
import { pickRandom } from "$lib/utils";

const storedTheme = themes.find(theme =>
  theme.name === localStorage.getItem("theme")
);
let theme = storedTheme || pickRandom<Theme>(themes);

export const currentTheme = writable<Theme>(theme);
currentTheme.subscribe(value => {
  document.documentElement.setAttribute("data-theme", value.name);
});
