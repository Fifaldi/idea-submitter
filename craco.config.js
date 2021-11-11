const CracoAlias = require('craco-alias');
const sassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path');
const {whenDev} = require('@craco/craco');

module.exports = {
    devServer: whenDev(() => ({
        port: 3000,
    })),
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './',
                tsConfigPath: './tsconfig.paths.json',
            },
        },
        {
            plugin: sassResourcesLoader,
            options: {
                resources: [
                    path.resolve(__dirname, './src/App.scss'),
                    path.resolve(__dirname, './src/layout/variables.scss'),
                    path.resolve(__dirname, './src/layout/_button-overrides.scss'),
                    path.resolve(__dirname, './src/layout/_tag-overrides.scss'),
                    path.resolve(__dirname, './src/layout/_input-overrides.scss'),
                    path.resolve(__dirname, './src/layout/_menu-overrides.scss'),
                ],
            },
        },
    ],
};
