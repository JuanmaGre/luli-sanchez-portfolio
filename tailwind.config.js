/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            't': ['Arbutus'],
            'title': ['Anton'],
            't2': ['Charmonman'],
            'footer': ['Anybody'],
            'links': ['Chilanka'],
            'services': ['Lato'],
        },
        extend: {},
    },
    plugins: [],
}