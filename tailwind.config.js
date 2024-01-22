/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                background: "url('assets/images/background.jpg')",
                background2: "url('assets/images/background2.webp')",
            },
            colors: {
                "transparent-blue": "rgba(7, 2, 35, 0.9)",
                "strong-blue": "#070127",
            },
            gridTemplateColumns: {
                custom: "1fr 80px 1fr 1fr 1fr",
            },
        },
    },
    plugins: [],
};
