
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
		Modals
		<span class="code_documentation_btn_goTo_home fas fa-home" onclick="GlobalThings.pathController.show('/home');"></span>
	</div>

`;


const code_examples = [];

code_examples.push({
	id : 'basic_modal',
	title : 'Basic Modal',
	description : 'Create a basic modal with default options.',
	code : `
	const modal = es.Modal.create({
		id : 'basic_modal',
		close_on_overlay_click : false,
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> Basic Modal </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('basic_modal');"> </span>
				</div>
			</div>
			<div class="components_modal--body"> </div>
			<div class="components_modal--footer"> </div>
		${'`'}
	})

	modal.open();
	`
});









code_examples.push({
	id : 'modal_types',
	title : 'Modal Types',
	description : 'The modal types are: "small", "small_600", "medium", "medium_1200", "medium_1300", "large", "complete".',
	code : `
	const modal = es.Modal.create({
		type : 'large',
		id : 'modal_types',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> Modal Types </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('modal_types');"> </span>
				</div>
			</div>
			<div class="components_modal--body"> </div>
		${'`'}
	})

	modal.open();
	`
});

code_examples.push({
	id : 'modal_data',
	title : 'Modal Data',
	description : 'Use the component feature to render data in the modal.',
	code : `
	const modal = es.Modal.create({
		id : 'modal_data',
		data : {
			title : 'Modal Title',
			name : 'Bruce Wayne',
			email : 'brucewayne@example.com',
		},
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> {title} </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('modal_data');"> </span>
				</div>
			</div>
			<div class="components_modal--body">
				{name} ~ {email}
			</div>
		${'`'}
	})

	modal.open();
	`
});

code_examples.push({
	id : 'modal_position',
	title : 'Modal position',
	description : 'Modificate the modal position, the top value has to be in px units and the position key has three availables values: "center", "left" and "right".',
	code : `
	const modal = es.Modal.create({
		top : '10px',
		position : 'left',
		id : 'modal_position',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> Modal </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('modal_position');"> </span>
				</div>
			</div>
			<div class="components_modal--body"> </div>
		${'`'}
	})

	modal.open();
	`
});

code_examples.push({
	id : 'all_height',
	title : 'All Height',
	description : 'This property makes that the modal has a height of 100% of the window.',
	code : `
	const modal = es.Modal.create({
		all_height : true,
		top : '0px',
		id : 'all_height',
		position : 'right',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> Modal </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('all_height');"> </span>
				</div>
			</div>
			<div class="components_modal--body"> </div>
		${'`'}
	})

	modal.open();
	`
});

code_examples.push({
	id : 'methods',
	title : 'Methods',
	description : "You can use the global methods and the local methods. <br /> The destroy method delete the modal from the DOM and you can't use the modal again.",
	code : `
	const modal = es.Modal.create({
		id : 'methods',
		template : ${'`'}
			<div class="components_modal--header">
				<div class="components_modal--header--title"> Modal methods </div>
				<div class="components_modal--header--buttons">
					<span class="btn-mkk btn_mkk_square fas fa-times" onclick="es.Modal.closeByID('methods');"> </span>
				</div>
			</div>
			<div class="components_modal--body"> </div>
		${'`'}
	})

	modal.open();
	// es.Modal.openByID('methods');

	// modal.close();
	// es.Modal.closeByID('methods');

	// modal.destroy();
	// es.Modal.destroyByID('methods');
	`
});

