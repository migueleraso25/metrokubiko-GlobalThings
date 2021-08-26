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
			// serve(),
			// livereload(),
			serve(),
			livereload(),
		],
		watch : {
			clearScreen : true,
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


// livereload({
// 	watch: '',
// 	// verbose: false, // Disable console output
// 	port: 5000,
// })



// function serve() {
// 	let started = false;
// 	return {
// 		writeBundle() {
// 			if (!started) {
// 				started = true;

// 				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
// 					stdio: ['ignore', 'inherit', 'inherit'],
// 					shell: true
// 				});
// 			}
// 		}
// 	};
// }