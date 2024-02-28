import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pink-gradient": "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        "blue-gradient": "linear-gradient(90deg, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)",
        "green-gradient": "linear-gradient(90deg, rgba(148,233,174,1) 0%, rgba(238,174,202,1) 100%)",
        },
    },
  },
  plugins: [],
};

export default config;
