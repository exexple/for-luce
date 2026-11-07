/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F4EE",
        parchment: "#EFE6DD",
        ink: "#2B2724",
        blush: { DEFAULT: "#E3B9B0", deep: "#C4897E" },
        lilac: { DEFAULT: "#C7BEE0", deep: "#9C8DC2" },
        plum: { DEFAULT: "#5B4352", deep: "#3A2A34" },
        peach: { DEFAULT: "#F3DCC2", deep: "#E4B98C" },
        sage: { DEFAULT: "#C3CDB8", deep: "#9BAA8C" },
        gold: { DEFAULT: "#C9A876" },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        album: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
