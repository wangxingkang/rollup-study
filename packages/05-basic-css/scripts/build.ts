import path from 'path';
import { InputOptions } from 'rollup';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { build } from '../../../utils/build';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const isProductionEnv = process.env.NODE_ENV === 'production'

export const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    postcss({
      extract: true,
      minimize: isProductionEnv,
    }),
    babel({
      presets: ['@babel/preset-env']
    }),
  ]
};

build('02-basic-es6', inputOptions);
