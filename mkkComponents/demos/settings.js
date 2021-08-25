


const modules = {};
const pages = [
	{ path : '/home', module_src : './home.js' },
	{ path : '/modal', module_src : './modal.js' },
	{ path : '/alert', module_src : './alert.js' },
	{ path : '/toast', module_src : './toast.js' },
	{ path : '/more_components', module_src : './more_components.js' },
];

const path_controller_pages = pages.reduce((acc, page) => {

	const { path, module_src } = page;

	acc[path] = {
		onInit : async (pageData) => {
			modules[path] = (await import(module_src)).default;
			modules[path].init({ pageData });
		},
		onShow : () => {
			modules[path].show();
		}
	};

	return acc;
}, {});



export const path_controller = {
	defaultPath : '/home',
	pages : path_controller_pages
}


export default {
	path_controller,
}