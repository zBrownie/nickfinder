/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilita o modo dark via classe
  theme: {
    extend: {
      height: {
        "screen-minus-64": "calc(100dvh - 64px)", // Adiciona uma altura personalizada
      },
    },
  },
  plugins: [],
};
