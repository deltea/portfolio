import { writable } from "svelte/store";
import type { Theme } from "$lib/types";
import { themes } from "$lib/themes";
import { pickRandom } from "$lib/utils";

const storedTheme = themes.find(theme => theme.name === localStorage.getItem("theme"));
export const currentTheme = writable<Theme>(storedTheme || pickRandom<Theme>(themes));
currentTheme.subscribe(value => {
  document.documentElement.setAttribute("data-theme", value.name);
  localStorage.setItem("theme", value.name);
});
