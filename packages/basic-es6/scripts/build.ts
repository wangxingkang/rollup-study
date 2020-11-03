import path from 'path';
import { rollup, InputOptions, OutputOptions } from 'rollup';
import babel from '@rollup/plugin-babel';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    })
  ]
};

const outputOptions: OutputOptions = {
  file: resolve('dist/index.js'),
  format: 'umd'
} 

async function build() {
  // create a bundle
  const bundle = await rollup(inputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
