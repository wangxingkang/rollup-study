import path from 'path';
import { InputOptions } from 'rollup';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { build } from '../../../utils/build';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    json(),
    babel({
      presets: ['@babel/preset-env']
    })
  ]
};

build('03-basic-json', inputOptions);
