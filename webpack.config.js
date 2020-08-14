const path = require('path');
const sveltePreprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry:'./src/index.ts',
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte', '.tsx', '.ts'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess({
              sourceMap: !prod
            }),
            // ...other svelte options
            emitCss: true,
            hotReload: true,
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  mode,
  devtool: prod ? false: 'source-map'
};
