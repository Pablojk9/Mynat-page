// webpack.config.js

const path = require('path');

module.exports = {
  // Otras configuraciones de Webpack
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Puedes agregar aquí tus middlewares personalizados
      middlewares.push((req, res, next) => {
        console.log('Middleware ejecutado');
        next();
      });

      return middlewares;
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
