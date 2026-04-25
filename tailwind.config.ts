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
        gold: "var(--gold)",
        goldLight: "var(--gold-light)",
        goldDark: "var(--gold-dark)",
        pureWhite: "var(--pure-white)",
        ivory: "var(--ivory)",
        cream: "var(--cream)",
        lightGrey: "var(--light-grey)",
        midGrey: "var(--mid-grey)",
        darkGrey: "var(--dark-grey)",
        charcoal: "var(--charcoal)",
        blush: "var(--blush)",
        terracotta: "var(--terracotta)",
        softSage: "var(--soft-sage)",
        offWhite: "var(--ivory)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)"],
        sans: ["var(--font-dm-sans)"],
        script: ["var(--font-great-vibes)"],
      },
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)",
        "gold-gradient": "var(--gold-gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
