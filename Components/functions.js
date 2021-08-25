import { getComponent, deleteComponent } from './data_controller.js';
import { createEvent } from '../eventsController/main.js';

const render = (uid) => {

	const component = getComponent(uid);

	if (!component) {
		throw 'This component does not exists';
	}

	const { data, template, element } = getComponent(uid);

	let render_HTML = template;

	for(const key in data) {
		render_HTML = render_HTML.replaceAll(`{${key}}`, data[key]);
	}

	element.innerHTML = render_HTML;
};


const setData = (uid, data, args) => {

	const component = getComponent(uid);

	if (!component) {
		throw 'This component does not exists';
	}

	args = args || {};
	data = data || {};

	if (args.merge !== false) {
		data = { ...component.data, ...data };
	}

	if (component.onChangeDataEvent) {
		component.onChangeDataEvent.dispatch({ ...data });
	}

	component.data = data;

};


const setTemplate = (uid, template) => {

	const component = getComponent(uid);

	if (!component) {
		throw 'This component does not exists';
	};

	component.template = template || '';
};


const onChangeData = (uid, callback) => {

	const component = getComponent(uid);

	if (!component) {
		throw 'This component does not exists';
	};

	if (!component.onChangeDataEvent) {
		component.onChangeDataEvent = createEvent(uid + '_onChangeDataEvent'); 
	}

	const removeListener = component.onChangeDataEvent.addListener(callback);

	return removeListener;
}



const destroy = (uid) => {

	const component = getComponent(uid);

	if (!component) {
		throw 'This component does not exists';
	};

	try {
		const { element } = component;
		element.parentNode.removeChild(element);
	}
	catch(e) { };

	deleteComponent(uid);
}



export default {
	destroy,
	render,
	setData,
	setTemplate,
	onChangeData,
}
