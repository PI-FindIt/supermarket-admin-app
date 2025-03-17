import baseConfig from "./utils/tailwind/tailwind.config";

const tailwindConfig = {
  ...baseConfig,
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../utils/**/*.{js,jsx,ts,tsx}",
  ],
};

export default tailwindConfig;
