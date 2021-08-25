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
				</div>
				<div class="code_documentation_container--code" code-element> </div>
			</div>
		`;
	}, '');


	code_examples.forEach(item => {

		const codeElement = pageData.frame.querySelector(`[code-id="${item.id}"]`);
		const copyButton = codeElement.querySelector(`[btn-id="copy"]`);
		const element = codeElement.querySelector(`[code-element]`);

		copyButton.onclick = () => navigator.clipboard.writeText(item.code);

		const editor = addCodeToDOM({
			element,
			mode : item.mode,
			code : item.code,
		});

		if (item.setTheme) {
			editor.setTheme("ace/theme/monokai");
		}
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
		Components of metroKubiko app
	</div>


	<div class="code_documentation_container" code-id="getting_started">
		<div class="code_documentation_container--text">Getting Started</div>
		<div class="code_documentation_container--description">
			The JS components can be imported by module or cdn.
		</div>
	</div>


	<div class="code_documentation_container" code-id="getting_started">
		<div class="code_documentation_container--text">Components</div>
		<div class="code_documentation_container--description">

			<ul>
				<li> <a class="link" onclick="GlobalThings.pathController.show('/modal');">Modals</a> </li>
				<li> <a class="link" onclick="GlobalThings.pathController.show('/alert');">Alerts</a> </li>
				<li> <a class="link" onclick="GlobalThings.pathController.show('/toast');">Toast</a> </li>
				<li> <a class="link" onclick="GlobalThings.pathController.show('/more_components');">More Components</a> </li>
			</ul>

		</div>
	</div>
`;




const code_examples = [];

code_examples.push({
	setTheme : true,
	id : 'import_by_cdn',
	mode : 'ace/mode/html',
	title : 'Import by cdn',
	description : ' ',
	code : `
	<!DOCTYPE html>
	<html>
	<head>
		<title>Components Example</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" type="text/css" href="../GlobalThings/mkkComponents/styles.css">
	</head>
	<body>

		<script src="../GlobalThings/mkkComponents/min.js"></script>
	</body>
	</html>
	`
});