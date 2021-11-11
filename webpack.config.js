const path = require('path');

module.exports = {
    baseUrl: './src',
    resolve: {
        alias: {
            layout: path.join(__dirname, 'src/layout'),
            assets: path.join(__dirname, 'src/assets'),
        },
    },
    externals: ['react'],
};
