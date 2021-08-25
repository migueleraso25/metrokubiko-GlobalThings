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
		Alerts
		<span class="code_documentation_btn_goTo_home fas fa-home" onclick="GlobalThings.pathController.show('/home');"></span>
	</div>

`;

const code_examples = [];

code_examples.push({
	id : 'basic_alert',
	title : 'Basic Alert',
	description : '',
	code : `
	es.Alert({
		accept : 'Ok', // default 'Accept'
		content : ${'`'}
			Hello World
		${'`'},
	});
	`
});

code_examples.push({
	id : 'all_features',
	title : 'More Features',
	description : '',
	code : `
	(async () => {
		const response = await es.Alert({
			content : 'Hello {name}',
			data : { name : 'Clark Kent' },
		});
		console.log(response);
	})();
	`
});

code_examples.push({
	id : 'confirm',
	title : 'Confirm',
	description : '',
	code : `
	(async () => {
		const response = await es.Confirm({
			content : 'Are you sure to delete this item?',
			accept : 'Delete', // default 'Accept'
			cancel : 'Cancel', // default 'Cancel'
		});
		console.log(response);
	})();
	`
});

code_examples.push({
	id : 'prompt',
	title : 'Prompt',
	description : '',
	code : `
	(async () => {

		const prompt = es.Prompt({
			title : 'New user data:',
			inputs : [{
				label: 'Name:'
			}],
			accept : 'Change', // default 'Accept'
			cancel : 'Cancel', // default 'Cancel'
		});

		const promptElement = document.querySelector('.components_prompt');

		console.log(promptElement);

		const response = await prompt;

		console.log(response);
	})();
	`
});