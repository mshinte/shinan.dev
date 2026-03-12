tailwind.config = {
  theme: {
    extend: {
      colors: {
        base: "#f7f4ef",
        ink: "#101012",
        muted: "#5b5c63",
        accent: "#b7ff3a",
        accent2: "#3ae3ff",
        accent3: "#ff7a59",
        card: "#ffffff",
        glass: "rgba(255, 255, 255, 0.7)",
        stroke: "rgba(16, 16, 18, 0.12)",
      },
      boxShadow: {
        soft: "0 28px 70px rgba(16, 16, 18, 0.12)",
        button: "0 12px 30px rgba(16, 16, 18, 0.18)",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      keyframes: {
        reveal: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.8s ease forwards",
      },
    },
  },
};
