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
        "primary-blue" : "#2563EB",
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "DEFAULT": "1230px",
      },
    },
  },
  plugins: [],
};
export default config;
