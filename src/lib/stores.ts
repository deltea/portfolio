import { writable } from "svelte/store";
import type { Theme } from "$lib/types";

export const currentTheme = writable<Theme>("bumblebee");
currentTheme.subscribe(value => {
  document.documentElement.setAttribute("data-theme", value);
  console.log(value);
});
