// craco.config.js
module.exports = {
    babel: {
        plugins: ["babel-plugins-macros", "babel-plugin-styled-components", "babel-plugin-twin"],
        "presets": [
            "babel/preset-env"
        ],
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },

}