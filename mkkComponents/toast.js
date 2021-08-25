
const containers = { };

const data = {
	duration : 4000,
	position : 'bottom-left',
}

const positions = {
	'top-left' : 'components_toast--container__top_left',
	'top-right' : 'components_toast--container__top_right',
	'bottom-left' : 'components_toast--container__bottom_left',
	'bottom-right' : 'components_toast--container__bottom_right',
}

const types = {
	'info' : 'components_toast--item__info',
	'error' : 'components_toast--item__error',
	'warning' : 'components_toast--item__warning',
	'success' : 'components_toast--item__success',
}

export const set = ({ position, duration }) => {

	if (position) data.position = positions[position] ? position : data.position;
	if (Number(duration) && duration > 0) data.duration =  duration;
}

export const Toast = ({ text, type }) => {

	createCurrentContainer();

	const classType = types[type] || types['success'];
	const toastElement = document.createElement('div');

	toastElement.innerHTML = text || '';
	toastElement.className = classType + ' components_toast--item';

	if (data.position.indexOf('top') === -1) {
		containers[data.position].appendChild(toastElement);
	}else {
		containers[data.position].insertBefore(toastElement, containers[data.position].firstChild);
	}

	toastElement.onclick = () => closeToast(toastElement);
	setTimeout(() => closeToast(toastElement), data.duration);
};



const closeToast = (toastElement) => {

	toastElement.classList.add('components_toast--item__clossing');

	setTimeout(function() {
		toastElement.parentNode.removeChild(toastElement);
	}, 1000);
}



export const success = (text) => {
	Toast({
		text,
		type : 'success',
	});
}

export const warning = (text) => {
	Toast({
		text,
		type : 'warning',
	});
}

export const error = (text) => {
	Toast({
		text,
		type : 'error',
	});
}

export const info = (text) => {
	Toast({
		text,
		type : 'info',
	});
}



export default {
	success,
	warning,
	error,
	info,
	set,
}




const createCurrentContainer = () => {

	if (containers[data.position]) {
		return;
	}

	const element = document.createElement('div');

	element.className = positions[data.position] + ' components_toast--container';

	document.body.appendChild(element);

	containers[data.position] = element;
}


