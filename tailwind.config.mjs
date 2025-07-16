import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/app/**/*.{js,jsx,css}',
    './src/components/**/*.{js,jsx,css}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
});
