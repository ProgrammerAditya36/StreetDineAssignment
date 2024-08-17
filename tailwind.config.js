module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx,css,html}",
        "./index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Roboto Flex"', "sans-serif"],
            },
            backgroundColor: {
                light: "#F8F8F8",
                page: "#ecf0f1",
            },
            backgroundImage: {
                gradientPrimary:
                    "linear-gradient(90deg, #87449A -8.99%, #F8F8F8 119.43%, #87449A 119.44%)",
            },
        },
    },
    plugins: [],
};
