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
        wf: {
          // Primary colors
          red: "#CD1309", // Wells Fargo primary red
          gold: "#FDB913", // Wells Fargo gold

          // Secondary colors
          "dark-red": "#A61000", // Darker red for hover states
          "light-gold": "#FFD04D", // Lighter gold for hover states

          // Neutral colors
          gray: {
            50: "#F5F6F7",
            100: "#E6E7E9",
            200: "#D1D3D4",
            300: "#BABDC0",
            400: "#939598",
            500: "#6D6E71",
            600: "#58595B",
            700: "#414042",
            800: "#2B2B2B",
            900: "#151515",
          },

          // Accent/UI colors
          success: "#008744", // Success green
          error: "#D92B04", // Error red
          warning: "#F2A900", // Warning yellow
          info: "#0052A5", // Info blue
        },
      },
    },
  },
  plugins: [],
};

export default config;
