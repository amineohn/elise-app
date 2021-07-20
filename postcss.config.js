import purgecss from 'purgecss'
module.exports = {
    plugins: {
        tailwindcss: {},
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
        autoprefixer: {},
    },
}
