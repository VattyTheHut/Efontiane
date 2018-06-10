const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: '/Users/vatekehcorlon/viscosity_va0.1/viscosity/client/src/App.js',
    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'index_bundle.js'
    },

    module: {
        loaders:[
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ],

        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader"
                  }
                ],
                exclude: /node_modules/
            }
            
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        // packageMains: [
        //   "webpack",
        //   "browser",
        //   "web",
        //   "browserify",
        //   ["jam", "main"],
        //   "main"
        // ]
      },

    plugins: [

    ]
}