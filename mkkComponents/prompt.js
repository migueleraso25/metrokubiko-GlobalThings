import { AlertCoreComponent } from './alert.js';

export const Prompt = function (args) {

	const {
		data,
		title,
		inputs,
		accept,
		cancel,
	} = args;


	const content = getContent({ title, inputs });
	const { acceptButton, cancelButton, destroy, element } = AlertCoreComponent({ data, content, accept, cancel : cancel || 'Cancel' });

	element.className += ' components_prompt';

	return new Promise((resolve) => {

		const close = (response) => {

			const inputs = element.querySelectorAll('input');
			const inputs_values = Array.from(inputs).map(input => input.value);

			destroy();

			if (!response) resolve(null);

			resolve(inputs_values);
		}

		acceptButton.onclick = () => close(true);
		cancelButton.onclick = () => close(false);
	});
};


const getContent = ({ title, inputs }) => {

	if (!inputs?.length) {
		inputs = [{ }];
	}

	const inputsHTML = inputs.reduce((acc, inputData) => {

		const { label, type } = inputData;
		const labelHTML = label ? `<label>${label}</label>` : '';

		return acc + `
			<div class="components_prompt--item">
				${labelHTML}
				<input class="components_prompt--input" type="${type || 'text'}"/>
			</div>
		`;
	}, '');

	return `
		<div class="components_prompt--title">
			${title}
		</div>
		${inputsHTML}

	`;

}


export default Prompt;