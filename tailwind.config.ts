import type { Config } from "tailwindcss";
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};

export default config

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: 'jsdom',
//   },
// })
