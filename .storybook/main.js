const path = require("path");
const webpack = require("webpack");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-controls",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              jsx: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      }
    );

    config.plugins.push(
      new webpack.ProvidePlugin({
        "window.Quill": "quill",
      })
    );

    config.resolve.alias = {
      themes: path.resolve(__dirname, "../src/themes"),
      utils: path.resolve(__dirname, "../src/utils"),
      assets: path.resolve(__dirname, "../assets"),
      config: path.resolve(__dirname, "../src/config"),
    };

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
