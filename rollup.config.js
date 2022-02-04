import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve'

const production = !process.env.ROLLUP_WATCH
const plugins = [
	terser()
]

export default [
	{
		input: './mkkComponents/main.js',
		output: {
			sourcemap: false,
			format: 'iife',
			name: 'es',
			file: './mkkComponents/min.js'
		},
		plugins,
	},
	{
		input: './main.js',
		output: {
			sourcemap: !production,
			format: 'iife',
			name: 'GlobalThings',
			file: './min.js'
		},
		plugins : [
			resolve({ browser: true }),
			!production && livereload('mkkComponents'),
			!production && serve(),
			commonjs(),
			terser(),
		],
		watch: {
			clearScreen: false
		}
	}
]

function serve() {

	let started = false

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}