const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./package.json").config;
const buildDir = config.buildDir;
const updateConfigFile = (content, path) => {
    let contentString;

    if(~path.indexOf("config.xml")) {
        contentString = content.toString();
        contentString = contentString.replace(/TEMPLATE_APP_NAME/g, config.appName);
        contentString = contentString.replace(/TEMPLATE_PACKAGE_ID/g, config.package);
    }

    return contentString || content;
};

module.exports = {
    entry: {
        main: "./js/main.js",
        vendors: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, buildDir),
        filename: "[name].[chunkhash].js"
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "static",
                transform: updateConfigFile
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendors", "manifest"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "static/index.html")
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    target: "web",
    module: {
        rules: [
          {
            test: /(.jsx|.js)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }],
          },
          {
            test: /\.scss/,
            use: ["style-loader", "css-loader","sass-loader"]
          }
        ]
    }
};
