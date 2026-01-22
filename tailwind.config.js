/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'], // For Brutalist Theme
        rounded: ['"Quicksand"', 'sans-serif'], // For Soft Theme
      },
      colors: {
        // Theme A: Deep Teal & Gold (Current)
        teal: {
          50: '#f0fdfa',
          900: '#134e4a',
          950: '#042f2e',
        },
        gold: {
          200: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
        },

        // Theme B: Swiss Brutalist (High Contrast / Compliance)
        bw: {
          black: '#000000',
          white: '#ffffff',
          alert: '#ff3333', // Pure Red
          warning: '#ffff00', // Pure Yellow
        },

        // Theme C: Soft Medical (Care / Human)
        soft: {
          bg: '#f0f4f8',
          surface: '#ffffff',
          primary: '#60a5fa', // Soft Blue
          secondary: '#34d399', // Soft Green
          text: '#475569',
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'soft': '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
        'soft-inner': 'inset 20px 20px 60px #d1d9e6, inset -20px -20px 60px #ffffff',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}
