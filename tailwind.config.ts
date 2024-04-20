import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    "max-md": { max: "735px" },
    "max-xl": { max: "1279px" },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  theme: {
    extend: {
      fontSize: {
        "h1-md": "1.6470588235rem",
        "h1-lg": "1.8823529412rem",
        "h1-xl": "2.3529411765rem",
        "h2-md": "1.1764705882rem",
        "h2-lg": "1.6470588235rem",
        "h2-xl": "1.8823529412rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        silver: "#DDDDDD",
        "red-orange": "#EE372F",
        dimgray: "#5E5E5E",
        "glyph-gray": "#F5F5F7",
        "slate-gray": "#8B8B8D",
        "charcoal-black": "#141414",
        "heading-gray": "#ADADAE",
        "blue-eye": "#2997ff",
      },
    },
  },
  plugins: [],
};
export default config;
