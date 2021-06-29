module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        })

        return config
    },
    env: {
        API: 'https://api-elise.imveny.repl.co/',
    },
    images: {
        disableStaticImages: true,
    },
}
