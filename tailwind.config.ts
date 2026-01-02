import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#0B1C2C",
          sky: "#E6F0FF",
          sand: "#F5F1EA",
          moss: "#3F6B4A",
          amber: "#F4A32C"
        }
      },
      fontFamily: {
        display: ["'DM Sans'", "Inter", "system-ui", "sans-serif"],
        body: ["'DM Sans'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 40px rgba(11, 28, 44, 0.12)",
        subtle: "0 4px 12px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
