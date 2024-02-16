/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                background: "url('assets/images/background.webp')",
            },
            colors: {
                "oxford-blue": "#070127",
                "space-cadet": "#172554",
                poppy: "#D64045",
                "poppy-dark": "#B9272C",
                viridian: "#498467",
                "viridian-dark": "#2B4F3E",
            },
            gridTemplateColumns: {
                custom: "0.5fr 1fr 0.5fr  ",
            },
        },
    },
    plugins: [],
};
