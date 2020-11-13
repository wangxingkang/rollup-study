process.env.NODE_ENV = 'development';

import path from 'path';
import { InputOptions, OutputOptions } from 'rollup';
import serve from 'rollup-plugin-serve';
import { start } from '../../../utils/start';
import { inputOptions as buildInputOptions } from './build';

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const PORT = 3005;

const inputOptions: InputOptions = {
  ...buildInputOptions,
  plugins: [
    ...buildInputOptions.plugins,
    serve({
      port: PORT,
      contentBase: [resolve('example'), resolve('dist')]
    })
  ]
};

const outputOptions: OutputOptions = {
  file: resolve('dist/index.js'),
  sourcemap: true,
  format: 'umd'
}

start(inputOptions, outputOptions);
