/* config-overrides.js */
module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        // "react": "preact/compat",
        // "react-dom": "preact/compat",
        // "react-dom/test-utils": "preact/test-utils"
    }
    return config;
}