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
  // ...other svelte options
  // enable run-time checks when not in production
  dev: !production,
  // we'll extract any component CSS out into
  // a separate file — better for performance
  css: css => {
    css.write('public/build/bundle.css');
  }
};