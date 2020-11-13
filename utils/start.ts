import { rollup, InputOptions, OutputOptions } from 'rollup';

export async function start(inputOptions: InputOptions, outputOptions: OutputOptions) {
  const bundle = await rollup(inputOptions);
  await bundle.write(outputOptions);
}
