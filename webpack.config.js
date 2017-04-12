const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./package.json').config;
const buildDir = config.buildDir;
const updateConfigFile = (content, path) => {
    let contentString;

    if(~path.indexOf('config.xml')) {
        contentString = content.toString();
        contentString = contentString.replace(/TEMPLATE_APP_NAME/g, config.appName);
        contentString = contentString.replace(/TEMPLATE_PACKAGE_ID/g, config.package);
    }

    return contentString || content;
};

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve(__dirname, buildDir),
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'static',
                transform: updateConfigFile
            }
        ])
    ],
    target: 'web',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
};