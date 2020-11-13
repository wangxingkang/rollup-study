import path from 'path';
import rimraf from 'rimraf';
import { rollup, InputOptions, OutputOptions, ModuleFormat } from 'rollup';

type Step = {
  inputOptions: InputOptions;
  outputOptions: OutputOptions;
}

const formats: ModuleFormat[] = ['es', 'commonjs', 'umd'];

const resolve = function(dir: string, filePath: string) {
  return path.join(__dirname, `../packages/${dir}`, filePath)
}

function getSteps(dir: string, inputOptions: InputOptions) {
  const steps: Step[] = [];
  formats.forEach(item => {
    steps.push({
      inputOptions,
      outputOptions: {
        file: resolve(dir, `dist/index-${item}.js`),
        format: item
      }
    });
  });
  return steps;
}

export async function build(dir: string, inputOptions: InputOptions) {
  // 删除构建目录
  rimraf.sync(resolve(dir, `dist`))
  const steps = getSteps(dir, inputOptions);

  steps.forEach(async ({ inputOptions, outputOptions }) => {
    const bundle = await rollup(inputOptions);
  
    await bundle.write(outputOptions);
  })
}
