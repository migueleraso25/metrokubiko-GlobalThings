import { Component } from '../Components/main.js';

export const AlertCoreComponent = (args) => {

	args = args || {};

	const {
		data,
		content,
		accept,
		cancel
	} = args;

	const template = getTemplate({ content, accept, cancel })
	const { appendTo, element, destroy } = Component('div', { data, template });


	element.className = 'components_alert';
	appendTo(document.body);

	const acceptButton = element.querySelector('[btn-id="accept"]');
	const cancelButton = element.querySelector('[btn-id="cancel"]');

	return {
		acceptButton,
		cancelButton,
		element,
		destroy
	}
};

export const Alert = function (args) {

	const {
		data,
		content,
		accept,
	} = args;

	const { acceptButton, destroy } = AlertCoreComponent({ data, content, accept });

	return new Promise((resolve) => {
		acceptButton.onclick = () => {
			resolve(true);
			destroy();
		};
	});
};


export default Alert;








const getTemplate = ({ content, cancel, accept }) => {

	accept = accept || 'Accept';

	const cancelButton = !cancel ? '' : `
		<span class="components_alert--content--controllers--btn components_alert--content--controllers--btn__cancel" btn-id="cancel">${cancel}</span>
	`;

	return `
		<div class="components_alert--overlay"> </div>

		<div class="components_alert--content">
			<div class="components_alert--content--text">
				${content}
			</div>
			<div class="components_alert--content--controllers">
				${cancelButton}
				<span class="components_alert--content--controllers--btn components_alert--content--controllers--btn__accept" btn-id="accept">${accept}</span>
			</div>
		</div>
	`;
}