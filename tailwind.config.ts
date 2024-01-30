import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#64748B',
        dark: '#1E293B',
        light: '#F1F5F9',
        background: '#F8FAFC',
        link: "#334155",
        heading: "#0F172A"
      },
    },
  },
  plugins: [],
};
export default config;
