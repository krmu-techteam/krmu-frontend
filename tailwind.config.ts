import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "Fraunces", "serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        playfair: ["var(--font-serif)", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
