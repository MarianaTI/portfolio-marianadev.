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
        custom: '#5C2092',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #5B0888 0%, #A555EC 69%)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
};
export default config;
