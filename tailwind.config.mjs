import defaultTheme from "tailwindcss/defaultTheme";

export const primary = "#1e384c";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono Variable", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary,
      secondary: "hsl(0, 0%, 89%)", // #e4e4e4
      "secondary-tinted": "hsl(0, 0%, 74%)",
      tertiary: "#ffa500",
    },
  },
  plugins: [],
};
