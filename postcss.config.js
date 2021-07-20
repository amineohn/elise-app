//const purgecss = require('purgecss')
module.exports = {
    plugins: {
        tailwindcss: {},
        //...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
        autoprefixer: {},
    },
}
