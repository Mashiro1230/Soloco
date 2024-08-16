import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/business/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/business/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/commons/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
            },
            colors: {
                black: { DEFAULT: "#262626" },
            },
            textColor: {
                DEFAULT: "#262626",
            },
        },
    },
    plugins: [],
};

export default config;
