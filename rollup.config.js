import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

const pkg = require('./package.json');

export default {
    input: [
        'src/index.js'
    ],
    output: [
        {file: pkg.module, format: 'iife', name: 'LabeledInput'},
        {file: pkg.main, format: 'iife', name: 'LabeledInput'},
    ],
    plugins: [
        svelte({
            customElement: true,
            tag: 'labeled-input',
            emitCss: true,
            css: (css) => {
                css.write('dist/build/labeled-input.css');
            }
        }),
        resolve({
                extensions: ['.svelte', '.mjs', '.js', '.jsx', '.json'],
                mainFields: ['jsnext:main', 'module', 'main']
            }
        )
    ]
};
