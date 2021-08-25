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
		Toast
		<span class="code_documentation_btn_goTo_home fas fa-home" onclick="GlobalThings.pathController.show('/home');"></span>
	</div>

`;

const code_examples = [];

code_examples.push({
	id : 'basic_toast',
	title : 'Basic Toast',
	description : '',
	code : `
	es.Toast.success('Proof of Toast');
	`
});

code_examples.push({
	id : 'set_toast',
	title : 'Set',
	description : 'The available positions are: "bottom-right", "top-right", "bottom-left", "top-left". The duration must be more than 0.',
	code : `
	es.Toast.set({ position: 'bottom-left', duration: 1000 });
	es.Toast.info('Proof of Toast');
	es.Toast.set({ position: 'bottom-right', duration: 6000 });
	es.Toast.success('Proof of Toast');
	`
});