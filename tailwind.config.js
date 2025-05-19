// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ Include 'app' directory if using Next.js 13+
  ],
  theme: {
    extend: {
      animation: {
        pulseColor: "pulseColor 2s infinite",
        fadeIn: "fadeIn 0.3s ease-out forwards",
        zoomIn: "zoomIn 0.4s ease-out forwards",
        marquee: "marquee 15s linear infinite", // ✅ Smooth horizontal scroll
      },
      keyframes: {
        pulseColor: {
          "0%": { backgroundColor: "#ff0000" },
          "50%": { backgroundColor: "#00ff00" },
          "100%": { backgroundColor: "#ff0000" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
