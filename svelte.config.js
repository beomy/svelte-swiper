const sveltePreprocess = require('svelte-preprocess')
const mode = process.env.NODE_ENV || 'development';
const production = mode === 'production';

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    typescript: {
      tsconfigFile: './tsconfig.json'
    },
  }),
};