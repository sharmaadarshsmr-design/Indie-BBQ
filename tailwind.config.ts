import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#020d1a',
          mid: '#041d35',
          surface: '#0a3352',
          glow: '#0e6ba8',
          bright: '#22a8d4',
          foam: '#7dd3fc',
        },
        gold: {
          DEFAULT: '#d4a843',
          light: '#f0c96a',
        },
        textMuted: '#94b4c8',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        cursive: ['var(--font-dancing-script)', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'scroll-pulse': 'scrollPulse 2s ease infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.2)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
