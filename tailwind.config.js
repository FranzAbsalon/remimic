/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      primaryColor: '#fa0535',
      secondaryColor: '#1b1b1b',
      primaryBackground: '#fff',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

