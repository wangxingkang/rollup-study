import path from 'path';
import { InputOptions } from 'rollup';
import buble from '@rollup/plugin-buble';
import { build } from '../../../utils/build';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    buble(),
  ]
};

build('01-basic', inputOptions);
