import path from 'path';
import { InputOptions } from 'rollup';
import buble from '@rollup/plugin-buble';
import typescript from 'rollup-plugin-typescript2';
import { build } from '../../../utils/build';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.ts'),
  plugins: [
    typescript(),
    buble()
  ]
};

build('06-typescript', inputOptions);
