module.exports = {
    webpack5: false,
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

        config.node = {
            dns: 'mock',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            path: true,
            url: false,
        }

        return config
    },
    images: {
        disableStaticImages: true,
    },
}
