import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customYellow: "#FFCC01",
        customGray: "#EDEEE9",
        customDarkGray: "#585858",
        darkestGray: "#454545",
        normalGray: "#6F6F6F",
        lightGray: "#D9D9D9",
        green: "#32CD32",
        red: "#FF4500",
      },
    },
  },
  plugins: [],
};
export default config;
