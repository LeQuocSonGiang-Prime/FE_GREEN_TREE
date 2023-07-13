const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
    // ...
    module: {
        rules: [
            // ...
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        // ...
        new GoogleFontsPlugin({
            fonts: [
                {
                    family: 'Montserrat',
                    variants: ['400', '500', '700', '800'],
                },
                {
                    family: 'Playfair Display',
                    variants: ['400', '500', '600', '700'],
                },
                {
                    family: 'Roboto Slab',
                    variants: ['400', '500', '600', '800'],
                },
                { family: 'Poppins' },
            ],
            formats: ['woff2', 'woff'],
        }),
    ],
};
