/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "Georgia", "serif"],
      inter: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
      sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
      serif: ["Playfair Display", "Georgia", "serif"],
    },
    extend: {
      colors: {
        primary: "#1D1D1B",
        ivory: "#F8F5F1",
        bg: "#F5F1EB",
        surface: "#FFFFFF",
        accent: "#A7865E",
        "muted-text": "#6F665F",
        border: "#E8E1D7",
        dark: "#1D1D1B",
        light: "#FBFAF7",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.25em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      spacing: {
        nav: "84px",
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        xs: "320px",
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

