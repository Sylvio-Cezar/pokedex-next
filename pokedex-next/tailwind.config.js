/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grass: '#74CB48',
        fire: '#F57D31',
        water: '#6493EB',
        ghost: '#70559B',
        electric: '#F9CF30',
        bug: '#A7B723',
        normal: '#AAA67F',
        psychic: '#FB5584',
        steel: '#B7B9D0',
        ground: '#D1B16B',
        flying: '#A4C3F2',
        dragon: '#7038F8',
        poison: '#A552CC',
        fighting: '#C22E28',
        ice: '#B3E0F2',
        dark: '#5A5366',
        fairy: '#F0B6CF',
        rock: '#A48E50'
      }
    },
  },
  plugins: [],
}
