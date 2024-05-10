export const themes = ["bumblebee", "rust", "bittersweet"] as const;
export type Theme = (typeof themes)[number];
