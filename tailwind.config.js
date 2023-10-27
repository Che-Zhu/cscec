/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '3/4screen': '75vh',
      }
    },
    colors: {
      'primary-120': '#1A5175',
      'primary-110': '#216897',
      'primary-100': '#2981BD',
      'secondary_lighter': '#7AB5D1',
      'neutrals-10': '#ECF1F3',
      'neutrals-80': '#495057',
      'neutrals-100': '#212529',
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
