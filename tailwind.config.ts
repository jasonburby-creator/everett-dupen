import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plaster: "#EDEBE5",
        "plaster-2": "#E4E1D8",
        paper: "#F6F4EF",
        ink: "#292419",
        "ink-soft": "#5B5345",
        bronze: "#6E4E2B",
        patina: "#4F6B5E",
        "patina-dk": "#3C5448",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Hanken Grotesk", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1280px" },
    },
  },
  plugins: [],
};
export default config;
