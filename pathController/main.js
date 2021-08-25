/*

	--------------------------------------------------------------------------------------------------------------------------------------
	------------------------ Example -----------------------------------------------------------------------------------------------------

		const defaultPath = 'home';
		const pages = {
			'home' : {
				onInit : (currentPage) => { },
				onShow : (currentPage) => { }
			},
			'home/proyectos' : {
				onInit : (currentPage) => { },
				onShow : (currentPage) => { }
			}
		}

		await GlobalThings.pathController.init({ pages, defaultPath });

		// GlobalThings.pathController.show('home/proyectos');
		// GlobalThings.pathController.getCurrentPage();



	------------------------ Example -----------------------------------------------------------------------------------------------------
	--------------------------------------------------------------------------------------------------------------------------------------





	--------------------------------------------------------------------------------------------------------------------------------------
	------------------------ Attributes --------------------------------------------------------------------------------------------------

		parentElement : DOM element (optional) // Default value is document body
		defaultPath : string (required)
		pages : Object (required)

			onInit : Funtion (optional) // Se ejecuta cuando la pagina se llama por primera vez y recibe como parametro los datos de la pagina
			onShow : Funtion (optional) // Se ejecuta cuando la pagina se llama excluyendo la primera vez y recibe como parametro los datos de la pagina

	------------------------ Attributes --------------------------------------------------------------------------------------------------
	--------------------------------------------------------------------------------------------------------------------------------------




	--------------------------------------------------------------------------------------------------------------------------------------
	------------------------ Methods -----------------------------------------------------------------------------------------------------

		init : Inicializa el modulo
		show : Muestra la pagina dada por el parametro

	------------------------ Methods -----------------------------------------------------------------------------------------------------
	--------------------------------------------------------------------------------------------------------------------------------------


*/






const setArgs = (args) => {

	args = args || {};

	const { pages, defaultPath, parentElement } = args;


	for(const path in pages) {
		pages[path].path = path;
	}

	return {
		pages : pages || {},
		defaultPath : defaultPath || '',
		parentElement : parentElement instanceof HTMLElement ? parentElement : document.body,
	}
}



const data = {};

const init = async (args) => {

	const { pages, defaultPath, parentElement } = setArgs(args);

	data.pages = pages;
	data.defaultPath = defaultPath;
	data.parentElement = parentElement;

	const history = window.history
	const pushState = history.pushState;

	history.pushState = function(state) {
		history.onpushstate();
		return pushState.apply(history, arguments);
	};

	onChangeState();

	return;
 }







const show = (path, args) => {
	ArgsWhenPageIsCreatedOrShowed.set(args);
	window.location.hash = path;
};

window.onpopstate = () => {
	onChangeState();
}

history.onpushstate = (args) => {
	onChangeState();
}




const ArgsWhenPageIsCreatedOrShowed = function () {

	let args = null;

	return {
		get : () => {

			const copy = JSON.parse(JSON.stringify(args || ''));
			args = null;

			return copy || null;
		},

		set : (newArgs) => {

			args = newArgs;
		}
	}
}();




const onChangeState = () => {

	const path = window.location.hash.slice(1);
	const currentPage = data.pages[path];

	if (!currentPage) {
		show(data.defaultPath);
		return;
	}

	for(const path in data.pages) {
		if (data.pages[path].frame) {
			data.pages[path].frame.style.display = 'none';
		}
	}

	if (currentPage.exists) {
		currentPage.frame.style.display = '';
		currentPage.onShow(currentPage, ArgsWhenPageIsCreatedOrShowed.get());
		return;
	}

	currentPage.exists = true;
	currentPage.frame = createFrame(currentPage);

	data.currentPage = currentPage;
	currentPage.onInit(currentPage, ArgsWhenPageIsCreatedOrShowed.get());
}


const createFrame = (page) => {

	const div = document.createElement('div');

	div.classList.add('pathController--frame');
	div.setAttribute('pathController--path', page.path);

	data.parentElement.appendChild(div);

	return div;
}



export default {
	init,
	show,
	getCurrentPage: () => data.currentPage,
}