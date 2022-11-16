/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        // htmlClass: CssValue,
        100: "100",
      },
    },
  },
  plugins: [],
};
