import defaultObject from './defaultObject.js';
import PreLoader from './preloader.js';
import ProgressBar from './progressbar.js';
import InputFormatter from './InputFormatter.js';
import pathController from './pathController/main.js';

// import newMessagePrompt from './newMessagePrompt/main.js';

window.searchString = (string, searchString) => {

	if (!string || !searchString) return false;

	return string.indexOf(searchString) > -1;
}


window.searchInStringNonStrict = (string, searchString) => {

	if (!string || !searchString) return false;

	string = string.toLocaleLowerCase();
	searchString = searchString.toLocaleLowerCase();

	return string.indexOf(searchString) > -1;
}


window.isNumber = number => !isNaN(number);

window.isObject = element => typeof element === 'object';

window.isFunction = fun => typeof fun === 'function';

window.parseIntEN = number => (parseInt(number) ? parseInt(number) : 0);

window.parseFloatEN = number => (parseFloat(number) ? parseFloat(number) : 0);

window.parseFloatENull = number => (parseFloat(number) ? parseFloat(number) : null);

window.parseFloatEOne = number => (parseFloatEN(number) ? parseFloatEN(number) : 1);

window.parseStringEN = string => (string ? String(string) : '');

window.parseDateEN = date => {
	if (typeof date === 'object') {
		if (!date) return null;
		else if (isFunction(date.getTime)) return date;
		else return null;
	}
	return null;
}

window.roundedNumber = (number, decimals) => {

	number = parseFloatEN(number)
	decimals = parseIntEN(decimals);

	if(decimals > 10) decimals = 10;

	const potency = 10 ** decimals;
	const roundedNumber = parseFloat(Math.round(number * potency) / potency);

	return parseFloatEN(roundedNumber);
}


export default {
	...defaultObject,
	PreLoader,
	ProgressBar,
	InputFormatter,
	pathController,
	// newMessagePrompt,
}