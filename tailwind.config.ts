import { type Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
