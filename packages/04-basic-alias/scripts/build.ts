import path from 'path';
import { InputOptions } from 'rollup';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import { build } from '../../../utils/build';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve('src')
        }
      ]
    })
  ]
};

build('04-basic-alias', inputOptions);
