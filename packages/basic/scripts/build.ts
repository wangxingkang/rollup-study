import path from 'path';
import { rollup, InputOptions, OutputOptions } from 'rollup';
import buble from '@rollup/plugin-buble';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    buble(),
  ]
};

const outputOptions: OutputOptions = {
  file: resolve('dist/index.js'),
  format: 'umd'
} 

async function build() {
  const bundle = await rollup(inputOptions);
  
  await bundle.write(outputOptions);
}

build();
