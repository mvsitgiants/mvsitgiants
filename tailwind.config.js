/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "light-theme-purple": "#E3D3FD",
        "theme-purple": "#6610f2",
        "dark-theme-purple": "#520dc2",
        "theme-blue": "#152C5B",
      },
    },
    plugins: [],
  },
};
