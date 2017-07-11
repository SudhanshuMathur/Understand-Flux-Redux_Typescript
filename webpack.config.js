const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        "cpanel": ["./src/control-panel.ts"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets/",
        filename: "[name].bundle.js"
    },
    resolve: {
        // Tell webpack to try adding ".ts" to `import ...` statements it parses
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./public" }
        ])
    ],
    devtool: "source-map",
    devServer: { inline: true }
};
