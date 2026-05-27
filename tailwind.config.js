/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent:      '#FFD338',
        'accent-h':  '#e6c030',
        dark:        '#111111',
        surface:     '#1e1f26',
        lgrey:       '#f5f5f5',
        'text-d':    '#1a1a1a',
        'text-m':    '#666666',
        dborder:     '#313131',
      },
      fontFamily: {
        roboto:      ['Roboto', 'sans-serif'],
        slab:        ['"Roboto Slab"', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        revealLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.65s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'reveal-l':   'revealLeft 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
