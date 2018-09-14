import path from "path";
import webpack from "webpack";

export default {
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      {test: /\.json$/, loader: "json-loader"},
      {
        // loader: "babel-loader",
        test: /\.{js,mjs}?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "minify"
              ]
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  ],

  resolve: {
    // .mjs needed for https://github.com/graphql/graphql-js/issues/1272
    extensions: ["*", ".mjs", ".js", ".json", ".gql", ".graphql"]
  },

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].mjs"
  },
  externals: [/^vendor\/.+\.js$/]
};
