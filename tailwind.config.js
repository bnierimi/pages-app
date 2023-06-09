/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      extend: {
        gridTemplateColumns: {
          fluidFit: "repeat(auto-fit, minmax(15rem, 1fr))",
          fluidFill: "repeat(auto-fill, minmax(15rem, 1fr))",
        },
        colors: {
          primary: "#9d00ff",
          secondary: "#e008ff",
          third: "#2ed1f2",
          mblack: "#1a1a1a",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
