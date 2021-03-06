const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    linearBorderGradients: (theme) => ({
      colors: theme("colors"),
      background: theme("colors"),
    }),
    extend: {
      backgroundImage: {
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-conic-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        "gradient-conic-r":
          "conic-gradient(at right, var(--tw-gradient-stops))",
        "gradient-conic-b":
          "conic-gradient(at bottom, var(--tw-gradient-stops))",
        "gradient-conic-l": "conic-gradient(at left, var(--tw-gradient-stops))",
        "gradient-conic-tr":
          "conic-gradient(at top right, var(--tw-gradient-stops))",
        "gradient-conic-tl":
          "conic-gradient(at top left, var(--tw-gradient-stops))",
        "gradient-conic-br":
          "conic-gradient(at bottom right, var(--tw-gradient-stops))",
        "gradient-conic-bl":
          "conic-gradient(at bottom left, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, theme, config }) {
      const themeColors = theme("colors");
      const individualBorderColors = Object.keys(themeColors).map(
        (colorName) => {
          if (typeof themeColors[colorName] == "string") {
            return {
              [`.border-b-${colorName}`]: {
                borderBottomColor: themeColors[colorName],
              },
              [`.border-t-${colorName}`]: {
                borderTopColor: themeColors[colorName],
              },
              [`.border-l-${colorName}`]: {
                borderLeftColor: themeColors[colorName],
              },
              [`.border-r-${colorName}`]: {
                borderRightColor: themeColors[colorName],
              },
            };
          }

          const colors = {};

          Object.keys(themeColors[colorName]).forEach((level) => {
            colors[`.border-b-${colorName}-${level}`] = {
              borderBottomColor: themeColors[colorName][level],
            };
            colors[`.border-t-${colorName}-${level}`] = {
              borderTopColor: themeColors[colorName][level],
            };
            colors[`.border-l-${colorName}-${level}`] = {
              borderLeftColor: themeColors[colorName][level],
            };
            colors[`.border-r-${colorName}-${level}`] = {
              borderRightColor: themeColors[colorName][level],
            };
          });

          return colors;
        }
      );

      addUtilities(individualBorderColors);
    }),
  ],
};
