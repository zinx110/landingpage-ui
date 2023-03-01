/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#14203E",
      primary2: "#24304E",
      secondary: "#F7F0E8",
      secondary2: "#e7e0d8",
    },
  },
  plugins: [],
};
