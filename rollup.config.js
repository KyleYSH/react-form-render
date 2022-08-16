import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss"
import {terser} from "rollup-plugin-terser";

const packageJson = require('./package.json');

export default {
    input: './src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        }
    ],
    plugins: [
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        external(),
        resolve(),
        typescript({tsconfig: './tsconfig.json'}),
        postcss(),
        terser(),
    ]
}