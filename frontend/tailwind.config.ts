import type { Config } from 'tailwindcss';

const config: Config = {
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
      // Set colors as primary: #563FE7, secondary: "E0DAFE", black: '#3c3c3c and white: '#f5f5f5'
      colors: {
        primary: '#563FE7',
        secondary: '#E0DAFE',
        blackCustom: '#3c3c3c',
        whiteCustom: '#f5f5f5',
        grayDashboard: '#A4A4A4',
      },
    },
  },
  plugins: [],
};

export default config;
