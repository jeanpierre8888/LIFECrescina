import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "12px": ["12px", "15px"],
      "16px": ["16px", "24px"],
      "20px": ["20px", "normal"],
      "21px": ["20px", "normal"],
      "24px": ["24px", "normal"],
      "28px": ["28px", "normal"],
      "32px": ["32px", "normal"],
      "34px": ["34px", "normal"],
      "35px": ["35px", "43px"],
      "40px": ["40px", "24px"],
      "48px": ["48px", "normal"],
    },
    borderWidth: {
      "3": "3px",
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
        lightgray: "#F8F8F8",
      },
    },
  },
  plugins: [],
};

export default config;
