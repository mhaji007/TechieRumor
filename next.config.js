// used to configure plugin
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {

    webpack: config => {

        config.plugins.push(
            
            new SWPrecacheWebpackPlugin({

                minify: true,
                // specifies files that we would like to ignore
                staticFileGlobsIgnorePatterns: [/\.next\//],
                runtimeCaching: [
                    {
                        handler: 'networkFirst',
                        urlPattern: /^https?.*/
                    }
                ]
            })
        )

        return config;
    }
}