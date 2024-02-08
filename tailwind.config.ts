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
        secondary: '#334155',
        dark: '#1E293B',
        light: '#F1F5F9',
        background: '#F8FAFC',
        "heading": "#0F172A",
        "hero": "#64748B"
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
