/*

	import { Component } from '../GlobalThings/Components/main.js';

	const data = {
		name : 'Miguel Eraso',
		email : 'email@example.com',
		unusedValue : '',
	};

	const template = `
		<h1> {name} <h1>
		<br />
		<span> {emai} <span>
	`;

	const { element, appendTo, setData, setTemplate, render, onChangeData } = Component('div', { data, template });

	element.className = 'card';

	// This method it will render the component, if you add the element to DOM of another way you must use the render method.

	appendTo(document.body);

	const removeListener = onChangeData((newData) => {
		console.log(newData);

		// 1) { name : 'Miguel', email : 'miguel@example.com', unusedValue : '' };
		// 2) { name : 'Miguel David', email : 'david@example.com' };
	});

	setData({ name : 'Miguel', email : 'miguel@example.com' });
	setData({ name : 'Miguel David', email : 'david@example.com' }, { merge : false });

	removeListener();
*/



import { getComponents, addComponent } from './data_controller.js';
import functions from './functions.js';

const createElement = (tag_name) => {

	const element = document.createElement(tag_name);

	return element;
}

export const Component = function (tag_name, args) {

	args = args || {};
	tag_name = tag_name || 'div';

	const { data, template } = args;
	const uid = GlobalThings.get_UID(150);
	const element = createElement(tag_name);

	addComponent(uid, {
		uid,
		element,
		tag_name,
		data : {},
		template : '',
	});

	functions.setTemplate(uid, template);
	functions.setData(uid, data);

	const render = () => {
		functions.render(uid);
	}

	const setData = (data) => {
		functions.setData(uid, data);
		render();
	}

	const setTemplate = (template) => {
		functions.setTemplate(uid, template);
		render();
	}

	const destroy = () => {
		functions.destroy(uid);
	}

	const appendTo = (parentElement) => {
		parentElement.appendChild(element);
		render();
	}

	const onChangeData = (callback) => {
		functions.onChangeData(uid, callback);
	}

	return { element, appendTo, setData, setTemplate, render, onChangeData, destroy };
};



