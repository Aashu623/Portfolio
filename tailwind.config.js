/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1E1E1E',
          text: '#D4D4D4',
          accent: '#569CD6',
          secondary: '#9CDCFE',
          highlight: '#C586C0',
        }
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
          '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        'float-bubble1': 'float 15s ease-in-out infinite',
        'float-bubble2': 'float 16s ease-in-out infinite',
        'float-bubble3': 'float 17s ease-in-out infinite',
        'float-bubble4': 'float 18s ease-in-out infinite',
        'float-bubble5': 'float 19s ease-in-out infinite',
        'float-bubble6': 'float 20s ease-in-out infinite',
        'float-bubble7': 'float 21s ease-in-out infinite',
        'float-bubble8': 'float 22s ease-in-out infinite',
        'float-bubble9': 'float 23s ease-in-out infinite',
        'float-bubble10': 'float 24s ease-in-out infinite',
        'float-bubble11': 'float 25s ease-in-out infinite',
        'float-bubble12': 'float 26s ease-in-out infinite',
        'float-bubble13': 'float 27s ease-in-out infinite',
        'float-bubble14': 'float 28s ease-in-out infinite',
        'float-bubble15': 'float 29s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} 