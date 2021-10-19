import { uglify } from "rollup-plugin-uglify";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

const watch = {
	clearScreen: false
};

const plugins = [
	uglify({
		output: {
			comments: false
		}
	})
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
		plugins : [
			uglify({
				output: {
					comments: false
				}
			}),
			!production && serve(),
			!production && livereload(),
		],
		watch : {
			clearScreen : false,
		},
	},
	// {
	// 	input: './main.js',
	// 	output: {
	// 		sourcemap: false,
	// 		format: 'iife',
	// 		name: 'GlobalThings',
	// 		file: './min.js'
	// 	},
	// 	plugins,
	// 	watch,
	// }
];
