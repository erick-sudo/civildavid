/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "-sm": { max: "639px" },
        "-lg": { max: "1024px" },
        "-md": { max: "767px" },
        md_lg: { min: "768px", max: "1023px" },
      },
    },
  },
  plugins: [],
};
