module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgba(var(--primary-color) / <alpha-value>)",
          light: "rgba(var(--primary-light-color) / <alpha-value>)",
          dark: "rgba(var(--primary-dark-color) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary-color) / <alpha-value>)",
          light: "rgba(var(--secondary-light-color) / <alpha-value>)",
          dark: "rgba(var(--secondary-dark-color) / <alpha-value>)",
        },
        divider: {
          DEFAULT: "rgba(var(--divider-color) / <alpha-value>)",
          light: "rgba(var(--divider-light-color) / <alpha-value>)",
          dark: "rgba(var(--divider-dark-color) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgba(var(--accent-color) / <alpha-value>)",
          light: "rgba(var(--accent-light-color) / <alpha-value>)",
          dark: "rgba(var(--accent-dark-color) / <alpha-value>)",
          contrast: "rgba(var(--accent-contrast-color) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
