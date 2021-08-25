import { path_controller } from './settings.js';




( async () => {
	await GlobalThings.pathController.init(path_controller);
})();





export const getNumberOfLinesBreaks = (text) => {

	text = String(text) || '';

	return (text.match(/\n/g)||[]).length;
}


export const addCodeToDOM = ({ element, code, mode }) => {

	const height = (getNumberOfLinesBreaks(code) + 1) * 14;

	element.style.height = height + 'px';

	const editor = ace.edit(element, {
		readOnly: true,
		value 	: code,
		mode 	: mode || "ace/mode/javascript",
	});

	return editor;
}



/*
`
	function closeModal(id_modal) {
		Components.getModal(id_modal).close();
	}

	function createModal() {
		let Modal = new Components.Modal({
			id 				: 'components-modal-01',
			type 			: 'Small-06',
			Header 			: ${'`'}
				<div class="Title">Modal Title</div>
				<div class="Btn-group">
					<i class="fas fa-times Btn-01" onclick="closeModal('components-modal-01');"></i>
				</div>
			${'`'},
			Body 			: 'Modal Body',
		});
		Modal.create();
	}
`

*/