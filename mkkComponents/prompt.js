import { AlertCoreComponent } from './alert.js';

export const Prompt = function (args) {

	const {
		id,
		data,
		title,
		inputs,
		accept,
		cancel,
		onAccept,
	} = args;


	const content = getContent({ title, inputs });
	const { acceptButton, cancelButton, destroy, element } = AlertCoreComponent({ data, content, accept, cancel : cancel || 'Cancel' });

	element.className += ' components_prompt';
	element.id = id || '';

	return new Promise((resolve) => {

		const close = (response) => {

			const inputs = element.querySelectorAll('input');
			const inputs_values = Array.from(inputs).map(input => input.value);

			destroy();

			if (!response) resolve(null);

			resolve(inputs_values);
		}

		acceptButton.onclick = () => {

			if (typeof onAccept !== 'function') {
				return close(true);
			}

			const inputs = element.querySelectorAll('input');

			if (!onAccept(Array.from(inputs))) return;

			close(true);
		}
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


Prompt.getSettingsExample = () => {

	return {
		title : 'Example',
		accept : 'Change',
		cancel : 'Cancel',
		inputs : [{ label: 'Name:' }],
		onAccept : (inputs) => {

			if (inputs[0].value > 100) return false;

			return true;
		}
	}
}

export default Prompt;