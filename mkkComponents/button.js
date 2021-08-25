import { Component } from '../Components/main.js';

const Button = function (args) {

	let currentState = 'initial';

	const { element } = (args || {});

	element.classList.add('components_button');

	const elementStyle = getComputedStyle(element);
	const elementBgColor = elementStyle.backgroundColor;
	const elementColor = elementStyle.color;

	const setState = (type) => {

		const stateElement = element.querySelector('.components_button--state');

		if (stateElement) {
			stateElement.parentNode.removeChild(stateElement);
		}


		currentState = type

		if (type === 'initial') return initialState({ element, elementColor, elementBgColor });
		if (type === 'loading') return loadingState({ element, elementColor, elementBgColor });

		return createState({ element, elementColor, elementBgColor });
	}

	const getState = () => {
		return currentState;
	}

	const Button = {
		setState,
		getState,
	}

	return Button;
};

const initialState = ({ element, elementColor, elementBgColor }) => {

	element.style.color = elementColor;

	return 'initial';
}

const loadingState = ({ element, elementColor, elementBgColor }) => {

	const stateElement = document.createElement('span');

	stateElement.className = 'components_button--state components_button--state__loading fas fa-spinner';
	stateElement.style.color = elementColor;

	element.style.color = elementBgColor;

	element.appendChild(stateElement);

	return 'loading';
}

const createState = ({ element, elementColor, elementBgColor }) => {

	const stateElement = document.createElement('span');

	stateElement.className = 'components_button--state';
	stateElement.style.color = elementColor;

	element.style.color = elementBgColor;

	element.appendChild(stateElement);

	return stateElement;
}




export default Button;