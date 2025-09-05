import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kp-blue': '#1E5DBC',
        'kp-blue-dark': '#0F4BAA',
        'kp-gray': '#6B7280',
        'kp-light-gray': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
export default config 