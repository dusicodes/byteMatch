/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-image": "url('src/images/home-page.jpg')",
      },
    },
  },
  plugins: [],
};
