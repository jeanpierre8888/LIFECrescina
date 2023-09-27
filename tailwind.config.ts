import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "16px": ["16px", "24px"],
      "36px": ["36px", "normal"],
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-libre-franklin)"],
        sans: ["var(--font-libre-franklin)"],
      },
      colors: {
        primary: "#98272B",
        secondary: "#333333",
        gray: "#666666",
      },
    },
  },
  plugins: [],
};

export default config;
