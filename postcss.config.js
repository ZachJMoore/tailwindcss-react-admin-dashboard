const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./src/tailwind/tailwind.config.js'),
        require('autoprefixer'),
    ],
};