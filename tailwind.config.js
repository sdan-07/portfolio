/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#bdc8d1",
        secondary: "#bdc2ff",
        outline: "#87929a",
        primary: "#8ed5ff",
        background: "#0b1326",
        surface: "#0b1326",
        "surface-container-lowest": "#060e20",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "outline-variant": "#3e484f",
        "primary-container": "#38bdf8",
        "on-primary-container": "#004965",
        tertiary: "#ffc176",
        "tertiary-container": "#f1a02b",
        "error-container": "#93000a",
        "on-surface": "#dae2fd"
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};
