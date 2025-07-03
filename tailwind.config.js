/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        border: "border 4s ease infinite",
        glow: "glow 4s ease infinite",
        "border-glow": "borderGlow 1.5s ease-in-out infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 0.8 },
        },
        borderGlow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        space: {
          dark: "#0b1020",
          blue: "#1a237e",
          purple: "#6a1b9a",
          silver: "#cfd8dc",
          teal: "#00bcd4",
        },
      },
    },
  },
  plugins: [],
};
