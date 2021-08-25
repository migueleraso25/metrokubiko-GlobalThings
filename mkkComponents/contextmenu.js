import { Component } from '../Components/main.js';

const ContextMenu = function (args) {

	args = args || {};

	const { items, onActive, darkMode } = args;
	const { element } = Component('div');

	element.setAttribute('tabindex', '-1');
	element.className = 'components_contextmenu';
	element.style.display = 'none';

	if (darkMode) {
		element.classList.add('components_contextmenu__dark-mode');
	}

	document.body.appendChild(element);

	(items || []).forEach(item => {

		const itemComponent = Component('a');
		const itemElement = itemComponent.element

		itemElement.className = 'components_contextmenu--item';
		itemElement.innerHTML = `
			${item.text || ''}
		`;

		element.appendChild(itemElement);

		itemElement.onclick = () => {

			element.blur();

			if (typeof onActive === 'function') {
				onActive(item);
			}
		}

	})

	element.addEventListener('focusout', () => {
		element.style.display = 'none';
	});


	const ContextMenu = {
		appendTo : (parentElement) => {
			ContextMenu.element = parentElement;
			appendTo({ parentElement, element,  });
		},
		destroy : () => {

			if (!ContextMenu.element) return;

			ContextMenu.element.oncontextmenu = null;
			element.parentNode.removeChild(element);
		}
	}


	return ContextMenu;
};

const appendTo = ({ parentElement, element }) => {

	parentElement.oncontextmenu = (event) => {

		event.preventDefault();
		element.style.display = '';
		element.focus();

		const { pageY, pageX } = event;
		const { offsetHeight, offsetWidth } = element;

		if (pageY + offsetHeight > document.documentElement.clientHeight) {
			element.style.top = '';
			element.style.bottom = '0px';
		}else{
			element.style.bottom = '';
			element.style.top = pageY + 'px';
		}

		if (pageX + offsetWidth > document.documentElement.clientWidth) {
			element.style.left = '';
			element.style.right = '0px';
		}else{
			element.style.right = '';
			element.style.left = pageX + 'px';
		}
	};

	return parentElement;
}











export default ContextMenu;