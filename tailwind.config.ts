import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-background': "url('/desktop-background.png')",
        'mobile-background': "url('/mobile-background.png')",
      },
      colors: {
        'light-gray': '#f1f1f1',
        'very-light-purple': '#c6b3e2',
        'light-purple': '#967ac3',
        'medium-purple': '#7f65bb',
        'dark-purple': '#604a8f',
        'dark-blue': '#0e212e',
      },
    },
  },
  plugins: [],
}
export default config
