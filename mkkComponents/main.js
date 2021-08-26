import { createModal, destroyModalByID, closeModalByID, openModalByID } from './modal.js';
import _Alert from './alert.js';
import _Confirm from './confirm.js';
import _Prompt from './prompt.js';
import _Toast from './toast.js';
import _ContextMenu from './contextmenu.js';
import _Button from './button.js';
import _AutoComplete from './autocomplete.js';

export const Modal = {
	create : createModal,
	destroyByID : destroyModalByID,
	closeByID : closeModalByID,
	openByID : openModalByID,
}

export const Alert = _Alert;
export const Confirm = _Confirm;
export const Prompt = _Prompt;
export const Toast = _Toast;
export const ContextMenu = _ContextMenu;
export const Button = _Button;
export const AutoComplete = _AutoComplete;

export default {
	Modal,
	Alert,
	Confirm,
	Prompt,
	Toast,
	Button,
	ContextMenu,
	AutoComplete,
}
