import settings from './settings.js';
import AnnexesController from './annexes.js';

const newMessagePrompt = function() {

	let globalArgs = {};
	let dataResult = {};
	let annexesArgs = {
		size : 3,
	};


	// Setters ---------------------------------------------------------------------------------------------------------

		const setArgs = ({ modalSettings, annexesSettings, srcStorage }) => {

			srcStorage = srcStorage || 'new_message'
			modalSettings = modalSettings || {};
			annexesSettings = annexesSettings || {};

			modalSettings = {
				...settings.modalSettings,
				Header		: `
					<div class="Title">
						${modalSettings.title || 'Nuevo Mensaje'}
					</div>
					<div class="Btn-group">
						<a class="Btn-02 btn-send btn-mkk">Enviar</a>
						<i class="fas fa-times btn-close Btn-02"></i>
					</div>
				`,
			}

			annexesArgs = {
				...annexesArgs,
				...annexesSettings,
				srcStorage
			};


			return {
				modalSettings,
				annexesArgs,
				srcStorage
			}
		}

		const setFunctions = ({ Modal, resolve, rte }) => {

			const BtnGroupElement = Modal.Header.getElementsByClassName('Btn-group')[0];
			const [ btnSendMessage, btnCancel ] = BtnGroupElement.children;

			const closeModal = (args) => {

				rte.destroy();

				resolve(args);
				Components.closeModal('Modal_Message_Prompt');
			}

			btnCancel.onclick = () => closeModal(null);
			btnSendMessage.onclick = () => closeModal(dataResult);
		}

		const setRTE = ({ Modal }) => {

			const { rteSettings } = settings;
			const rteElement = Modal.Body.children[0];
			const rte = new ej.richtexteditor.RichTextEditor(rteSettings);

			rte.change = () => {
				dataResult.text = rte.value;
			}

			rte.toolbarClick =  (args) => {

				if (args.item.id === 'agregar_imagen') {
					addImage({ rte });
					return;
				}

				if (args.item.id === 'agregar_anexos') {
					setAnnexes();
					return;
				}
			}

			rte.appendTo(rteElement);

			return rte;
		}

	// Setters ---------------------------------------------------------------------------------------------------------




	// Functions ---------------------------------------------------------------------------------------------------------

		const addImage = ({ rte }) => {

			const { srcStorage } = globalArgs;
			const fileInput = document.getElementById('Input_newMessagePrompt_add_image');

			fileInput.click();

			fileInput.onchange = async (event) => {

				const file = event.target.files[0];

				if (!file) return;

				const url = await GlobalThings.uploadFile({
					path	: srcStorage,
					file	: file,
				})

				rte.value += `<img src="${url}" />`

				event.target.value = null;
			}
		}

		const setAnnexes = async () => {

			const result = await AnnexesController({ ...annexesArgs, data : dataResult.annexes, src : globalArgs.srcStorage });

			if (!result) return;

			dataResult.annexes = result.filter(obj => obj.src);
		}

	// Functions ---------------------------------------------------------------------------------------------------------



	return (args) => new Promise(resolve => {

		args = args || {};
		globalArgs = setArgs(args);
		dataResult = {
			text : '',
			annexes : []
		}

		const { modalSettings } = globalArgs;
		const Modal = new Components.Modal(modalSettings);

		Modal.create();

		const rte = setRTE({ Modal });
		setFunctions({ Modal, resolve, rte });
	});
}();






export default newMessagePrompt;