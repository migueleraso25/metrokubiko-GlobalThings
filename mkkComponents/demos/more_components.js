import { addCodeToDOM } from './app.js';

export const init = ({ pageData }) => {


	pageData.frame.innerHTML = pageHTML;

	pageData.frame.innerHTML += code_examples.reduce((acc, item) => {
		return acc + `
			<div class="code_documentation_container" code-id="${item.id}">
				<div class="code_documentation_container--text">${item.title}</div>
				<div class="code_documentation_container--description">${item.description}</div>
				<div class="code_documentation_container--controllers">
					<span class="btn-mkk" btn-id="copy">Copy</span>
					<span class="btn-mkk" btn-id="run">Run</span>
				</div>
				<div class="code_documentation_container--code" code-element> </div>
			</div>
		`;
	}, '');


	code_examples.forEach(item => {

		const codeElement = pageData.frame.querySelector(`[code-id="${item.id}"]`);
		const copyButton = codeElement.querySelector(`[btn-id="copy"]`);
		const runButton = codeElement.querySelector(`[btn-id="run"]`);
		const element = codeElement.querySelector(`[code-element]`);

		runButton.onclick = () => eval(item.code);
		copyButton.onclick = () => navigator.clipboard.writeText(item.code);

		addCodeToDOM({
			element,
			code : item.code,
		});
	});
}



export const show = () => {

}


export default {
	show,
	init
};


const pageHTML = `
	<div class="code_documentation_title">
		More Components
		<span class="code_documentation_btn_goTo_home fas fa-home" onclick="GlobalThings.pathController.show('/home');"></span>
	</div>
`;

const code_examples = [];

code_examples.push({
	id : 'context_menu',
	title : 'ContextMenu',
	description : '',
	code : `
	const { element, open } = es.Modal.create({
		id : 'context_menu',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> ContextMenu </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('context_menu');"> </span>
				</div>
			</div>
			<div class="components_modal--body">
				<div class="contextMenu"
					style="
						margin: 40px 20px;
						height: 100px;
						border: solid 1px rgba(0, 0, 0, .5);
						display: flex;
						justify-content: center;
						align-items: center;"
				>
					Press right click.
				</div>
			</div>
		${'`'}
	})

	const contextMenuElement = element.querySelector('.contextMenu');
	const contextMenu = es.ContextMenu({
		// darkMode : true,
		onActive : (item) => es.Toast.success('You clicked: ' + item.text),
		items : [
			{ text : 'Item 01' },
			{ text : 'Item 02' },
			{ text : 'Item 03' },
			{ text : 'Item 04' }
		]
	});

	open();
	contextMenu.appendTo(contextMenuElement);
	`
});

code_examples.push({
	id : 'button',
	title : 'Button',
	description : '',
	code : `
	const { element, open } = es.Modal.create({
		id : 'context_menu',
		type: 'small',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> Button </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('context_menu');"> </span>
				</div>
			</div>
			<div class="components_modal--body" style="display: flex; justify-content: center; align-items: center; height: 100px;">
				<button class="btn-mkk btn-ingresar" style="width: 150px; text-align: center;"> Click Me </button>
			</div>
		${'`'}
	})

	const buttonElement = element.querySelector('.components_modal--body button');
	const { setState, getState } = es.Button({ element : buttonElement });

	buttonElement.onclick = () => {

		if (getState() !== 'loading') {
			setState('loading');
			return;
		};

		const stateElement = setState('custom_state');

		stateElement.innerHTML = 'Custom State';

		setTimeout(function() {
			setState('initial');
		}, 3000);
	}

	open();
	`
});

code_examples.push({
	id : 'autocomplete',
	title : 'AutoComplete',
	description : '',
	code : `
	const modal = es.Modal.create({
		id : 'autocomplete',
		type: 'small',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> AutoComplete </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('autocomplete');"> </span>
				</div>
			</div>
			<div class="components_modal--body" style="display: flex; justify-content: center; align-items: center; height: 100px;">
				<input class="Input-mkk"/>
			</div>
		${'`'}
	})

	const autocomplete = es.AutoComplete({
		items : [ 'hola', 'mundo', 'hola mundo' ],
		element : modal.element.querySelector('input')
	});

	// const buttonElement = modal.element.querySelector('.components_modal--body button');
	// const { setState, getState } = es.Button({ element : buttonElement });

	// buttonElement.onclick = () => {

	// 	if (getState() !== 'loading') {
	// 		setState('loading');
	// 		return;
	// 	};

	// 	const stateElement = setState('custom_state');

	// 	stateElement.innerHTML = 'Custom State';

	// 	setTimeout(function() {
	// 		setState('initial');
	// 	}, 3000);
	// }

	modal.open();
	`
});



