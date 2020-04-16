// rollup.config.js
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/microscope.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    plugins: [terser()],
    sourcemap: true,
  },
};