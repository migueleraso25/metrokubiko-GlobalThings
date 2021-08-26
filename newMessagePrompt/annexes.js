import settings from './settings.js';

const { annexesModal } = settings;
const defaultAnnexe = { name : '', src : '' }



const AnnexesController = function() {

	let annexesSrc = null;
	let dataResult = null;


	// Setters ---------------------------------------------------------------------------------------------------------

		const setArgs = ({ size, data, srcStorage }) => {

			dataResult = [];
			data = data || [];
			size = parseFloatEN(size) || 3;

			for (let i = 0; i < size; i++) {
				dataResult[i] = data[i] || {...defaultAnnexe};
			}

			return {
				srcStorage,
				modalSettings : annexesModal,
			}
		}

		const setFunctions = ({ Modal, resolve }) => {

			const BtnGroupElement = Modal.Header.getElementsByClassName('Btn-group')[0];
			const [ btnSendMessage, btnCancel ] = BtnGroupElement.children;

			const closeModal = (args) => {
				resolve(args);
				Components.closeModal('Modal_Message_Prompt_annexes');
			}

			btnCancel.onclick = () => closeModal(null);
			btnSendMessage.onclick = () => closeModal(dataResult);
		}

	// Setters ---------------------------------------------------------------------------------------------------------



	// cards -----------------------------------------------------------------------------------------------------------

		const addCards = ({ Modal }) => {

			const CardsElement = Modal.Body;

			dataResult.forEach((annexe, index) => addCard({ annexe, index, CardsElement }))

		}

		const createCardElement = ({ CardsElement }) => {

			const CardElement = document.createElement('div');

			CardElement.classList.add('Modal_Message_Prompt_annexes--item');
			CardsElement.appendChild(CardElement);

			return CardElement;
		}

		const addCard = ({ annexe, index, CardsElement }) => {

			const CardElement = createCardElement({ CardsElement });

			CardElement.innerHTML = `
				<div class="Modal_Message_Prompt_annexes--item--title">
					<!--
						<span class="Modal_Message_Prompt_annexes--item--title--index">
							${index})
						</span>
					-->
					<input type="file" style="display: none;" id="Input_newMessagePrompt_upload_annexe_${index}" >
					<input class="Input-mkk Modal_Message_Prompt_annexes--item--title--input" readonly value="${annexe.name}" placeholder="Anexo ${index}" />
				</div>

				<div class="Modal_Message_Prompt_annexes--item--controllers">
					<a class="Modal_Message_Prompt_annexes--item--btn Modal_Message_Prompt_annexes--item--btn--delete fas fa-trash"></a>
					<a class="Modal_Message_Prompt_annexes--item--btn Modal_Message_Prompt_annexes--item--btn--upload fas fa-upload"></a>
				</div>
			`;

			addCardFunctions({ CardElement, annexe, index });
		}

		const addCardFunctions = ({ CardElement, annexe, index }) => {

			const uploadInput = document.getElementById(`Input_newMessagePrompt_upload_annexe_${index}`);
			const titleInput = CardElement.getElementsByClassName('Modal_Message_Prompt_annexes--item--title--input')[0];
			const ControllersElement = CardElement.getElementsByClassName('Modal_Message_Prompt_annexes--item--controllers')[0];
			const [ btnDelete, btnUpload ] = ControllersElement.getElementsByClassName('Modal_Message_Prompt_annexes--item--btn');

			btnDelete.onclick = () => {
				titleInput.value = '';
				dataResult[index] = {...defaultAnnexe};
			}

			btnUpload.onclick = () => {
				uploadInput.click();
			}

			uploadInput.onchange = async (event) => {

				const file = event.target.files[0];

				if (!file) return;

				const { name } = file;
				const src = await GlobalThings.uploadFile({
					file	: file,
					path	: annexesSrc
				})

				titleInput.value = name;
				dataResult[index] = { name, src };

				event.target.value = null;
			}
		}

	// cards -----------------------------------------------------------------------------------------------------------







	return (args) => new Promise(resolve => {

		args = args || {};

		const { modalSettings, srcStorage } = setArgs(args);
		const Modal = new Components.Modal(modalSettings);

		annexesSrc = srcStorage;

		Modal.create();

		addCards({ Modal });
		setFunctions({ Modal, resolve });
	});
}();



export default AnnexesController;