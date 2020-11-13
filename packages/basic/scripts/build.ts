import path from 'path';
import rimraf from 'rimraf';
import { rollup, InputOptions, OutputOptions, ModuleFormat } from 'rollup';
import buble from '@rollup/plugin-buble';

type Step = {
  inputOptions: InputOptions;
  outputOptions: OutputOptions;
}

const formats: ModuleFormat[] = ['es', 'commonjs', 'umd'];

const resolve = function(filePath: string) {
  return path.join(__dirname, '..', filePath)
}

const inputOptions: InputOptions = {
  input: resolve('src/index.js'),
  plugins: [
    buble(),
  ]
};

function getSteps() {
  const steps: Step[] = [];
  formats.forEach(item => {
    steps.push({
      inputOptions,
      outputOptions: {
        file: resolve(`dist/index-${item}.js`),
        format: item
      }
    });
  });
  return steps;
}

async function build() {
  // 删除构建目录
  rimraf.sync(resolve(`dist`))
  const steps = getSteps();

  steps.forEach(async ({ inputOptions, outputOptions }) => {
    const bundle = await rollup(inputOptions);
  
    await bundle.write(outputOptions);
  })
}

build();
