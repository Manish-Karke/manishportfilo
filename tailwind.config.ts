/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-once": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)", // Adjust the bounce height as needed
          },
        },
      },
      animation: {
        "bounce-once": "bounce-once 1s ease-in-out 1", // Runs once for 1 second
      },
    },
  },
  plugins: [],
};
