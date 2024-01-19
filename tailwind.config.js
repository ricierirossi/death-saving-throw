/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                lava: "url('assets/images/lava.jpg')",
            },
            colors: {
                "transparent-black": "rgba(0, 0, 0, 0.6)",
            },
            gridTemplateColumns: {
                custom: "1fr 80px 1fr 1fr 1fr",
            },
        },
    },
    plugins: [],
};
