import { Component } from '../Components/main.js';



const AutoComplete = function ({ element, items }) {

	if (!Array.isArray(items)) items = [];
	if (!(element instanceof HTMLElement) && element?.tagName !== 'INPUT') throw 'element key must be an input.';

	const component = Component('ul');
	const ulElement = component.element;

	component.appendTo(document.body);

	ulElement.style.display = 'none';
	ulElement.className = 'components_autocomplete';


	items = items.map(text => {

		const liElement = document.createElement('li');

		ulElement.appendChild(liElement);

		liElement.innerHTML = text;
		liElement.style.display = 'none';
		liElement.onclick = () => {
			console.log(text);
			element.value = text;
		}

		return {
			text,
			liElement,
		}
	});

	element.addEventListener('input', e => {

		const { top, height, left, width } = element.getBoundingClientRect()

		ulElement.style.top = `${top + height}px`;
		ulElement.style.left = `${left}px`;
		ulElement.style.width = `${width}px`;

		const result = items.filter(item => {
			const show = item.text.toLowerCase().indexOf(element.value.toLowerCase()) > -1

			if (show) {
				item.liElement.style.display = '';
			}else{
				item.liElement.style.display = 'none';
			}

			return show;
		});

		if (result.length) {
			ulElement.style.display = '';
		}else{
			ulElement.style.display = 'none';
		}

		console.log(result);
	});

	element.addEventListener('focusout', e => {
		setTimeout(function() {
			ulElement.style.display = 'none';
		}, 200);
		// ulElement.children.forEach(li => li.style.display = 'none');
	});

	return {
		destroy : component.destroy,
	}
};


export default AutoComplete;
















// [

// 	{
// 		word : 'hola mundo',
// 		keys : {
// 			h : 1,
// 			o : 2,
// 			l : 1,
// 			a : 1,
// 			m : 1,
// 			u : 1,
// 			n : 1,
// 			d : 1,
// 		}
// 	}
// ]