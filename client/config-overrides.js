const CompressionPlugin = require('compression-webpack-plugin');


module.exports = (config) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils"
    }
    config.plugins = [
        ...config.plugins,
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            filename: '[path]',
            cache: true
        })
    ];
    return config;
}