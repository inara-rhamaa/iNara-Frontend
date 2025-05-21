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
        inara: {
          green: {
            DEFAULT: '#0A5D3B', // Dark green from the logo
            light: '#0F7C4F',  // Lighter variant
            dark: '#064029'     // Darker variant
          },
          yellow: {
            DEFAULT: '#FFCB2E', // Yellow from the logo
            light: '#FFD65A',   // Lighter variant
            dark: '#E5B41A'     // Darker variant
          }
        }
      }
    }
  },
  plugins: [],
};
export default config;
