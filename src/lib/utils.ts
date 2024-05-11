import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function pickRandom<T>(array: T[], exclude: T | null = null): T {
  const filteredArray = array.filter(x => x !== exclude);
  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[randomIndex];
}

export function cn(...values: ClassValue[]) {
  return twMerge(clsx(values));
}
