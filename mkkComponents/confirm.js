import { AlertCoreComponent } from './alert.js';



export const Confirm = function (args) {

	const {
		data,
		content,
		accept,
		cancel,
	} = args;

	const { acceptButton, cancelButton, destroy } = AlertCoreComponent({ data, content, accept, cancel : cancel || 'Cancel' });

	return new Promise((resolve) => {

		const close = (response) => {
			resolve(response);
			destroy();
		}

		acceptButton.onclick = () => close(true);
		cancelButton.onclick = () => close(false);
	});
};


export default Confirm;