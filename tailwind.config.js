/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark", 
      "corporate",
      "business",
      {
        lab: {
          "primary": "#2563eb",
          "secondary": "#64748b", 
          "accent": "#10b981",
          "neutral": "#374151",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b", 
          "error": "#ef4444",
        }
      }
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}