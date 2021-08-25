import { Component } from '../Components/main.js';

const getModalID = () => {

	const length = 100;
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;

	let result = '';

	for ( let i = 0; i <= length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}


const modals = {};


export const createModal = function (args) {

	args = args || {};

	const { data, template, id, type, position, all_height, top, close_on_overlay_click, onclose } = args;
	const modalComponent = Component('div', { data, template: getTemplate({ template, type, position, all_height, top }) });

	const appendTo = modalComponent.appendTo;
	const modalID = id || getModalID();

	modalComponent._destroy = modalComponent.destroy;

	modals[modalID] = {
		onclose,
		id : modalID,
		...modalComponent,
		open : () => openModalByID(modalID),
		close : () => closeModalByID(modalID),
		destroy : () => destroyModalByID(modalID),
	};
	modals[modalID].element.className = 'components_modal';

	delete modalComponent.appendTo;

	modals[modalID].element.style.display = 'none';
	modals[modalID].element.id = id;

	appendTo(document.body);


	if (close_on_overlay_click !== false) {
		const overlay = modals[modalID].element.querySelector('.components_modal--display');
		const content = modals[modalID].element.querySelector('.components_modal--content');

		content.onclick = (e) => e.stopPropagation();
		overlay.onclick = (e) => closeModalByID(modalID);
	}


	return modals[modalID];
};


export const destroyModalByID = (modalID) => {
	const html = document.querySelector('html');

	html.style.overflow = '';
	modals[modalID]._destroy();
}

export const closeModalByID = (modalID) => {
	const html = document.querySelector('html');

	html.style.overflow = '';
	modals[modalID].element.style.display = 'none';

	if(typeof modals[modalID].onclose === 'function') modals[modalID].onclose();
}

export const openModalByID = (modalID) => {
	const html = document.querySelector('html');

	html.style.overflow = 'hidden';
	modals[modalID].element.style.display = '';
}












/*
	----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Settings
	----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

		const getTemplate = ({ template, type, position, top, all_height }) => {

			template = template || '';

			const modal_position_class = modal_position[position] || modal_position[modal_position__default];
			const modal_type_class = modal_types[type] || modal_types[modal_types__default];
			const all_height_class = all_height ? 'components_modal--content__all_height' : '';

			return `
				<div class="components_modal--overlay"></div>
				<div class="components_modal--display">
					<div class="components_modal--content ${modal_type_class} ${modal_position_class} ${all_height_class}" style="--top: ${top || '40px'};">
						${template || defaultTemplate}
					</div>
				</div>
			`
		};

		const modal_types__default = 'medium';
		const modal_types = {

			'small' : 'components_modal--content__small',
			'small_600' : 'components_modal--content__small_600',

			'medium' : 'components_modal--content__medium',
			'medium_1200' : 'components_modal--content__medium_1200',
			'medium_1300' : 'components_modal--content__medium_1300',

			'large' : 'components_modal--content__large',

			'complete' : 'components_modal--content__complete',
		};

		const modal_position__default = 'center';
		const modal_position = {
			'left' : 'components_modal--content__left',
			'center' : 'components_modal--content__center',
			'right' : 'components_modal--content__right',
		};

		const defaultTemplate = `
			<div class="components_modal--header"> </div>
			<div class="components_modal--body"> </div>
			<div class="components_modal--footer"> </div>
		`;


/*
	----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Settings
	----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
