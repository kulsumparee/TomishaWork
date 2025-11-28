/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-teal": "#4A9B9B",
        "light-blue": "#E8F4F8",
        "dark-gray": "#2C3E50",
        "medium-gray": "#5A6C7D",
      },
    },
  },
  plugins: [],
};
