
const InputFormatter = function(Module){


	Module.add = (input, format) => {

		let element;

		format = format || {};

		if (typeof input === 'string') element = document.getElementById(input);
		else if (typeof input === 'object' && ( input?.tagName === 'INPUT' || input?.tagName === 'input' ) ) element = input;
		else throw 'Not an input';

		if (format.type === 'percentage') Module.percentage(element, format);
		else if (format.type === 'default' || !format.type) Module.default(element, format);
	}


	Module.percentage = (element, format) => {

		element.onfocus = e => {
			const value = element.value;
			element.value = Module.undoFormatting(value) / 100;
		}

		element.onfocusout = e => {

			let value = element.value;

			if (isNumber(format.minimum)) value = element.value > format.minimum ? element.value : format.minimum;

			element.value = Module.format((value * 100), format.decimals) + '%';
		}
	}


	Module.default = (element, format) => {

		element.onfocus = e => {
			const value = element.value;
			element.value = Module.undoFormatting(value);
		}

		element.onfocusout = e => {

			let value = element.value;

			if (isNumber(format.minimum)) value = element.value > format.minimum ? element.value : format.minimum;

			element.value = Module.format(value, format.decimals);
		}
	}


	Module.roundOut = (arg01, arg02) => {

		const number = parseFloatEN(arg01);
		const decimals = parseIntEN(arg02);

		if(decimals > 10) decimals = 10;

		let potencia = 10 ** decimals;
		let roundNumber = parseFloat(Math.round(number * potencia) / potencia);

		return parseFloatEN(roundNumber);
	}


	Module.format = (arg01, arg02) => {

		const decimals			= parseIntEN(arg02);
		const roundNumber		= Module.roundOut(arg01, decimals);
		const stringRoundNumber	= String(roundNumber);
		const isnegative		= roundNumber < 0;

		const stringNumber = isnegative ? stringRoundNumber.slice(1) : stringRoundNumber;
		const reversed = String(parseIntEN(stringNumber)).split('').reverse();

		const arrayOfIntPart = reversed.map((char, index) => {
			if ((index + 1) % 3 === 0 && reversed.length - 1 !== index && index !== 0) return ',' + char;
			else return char;
		})

		const stringOfIntPart = arrayOfIntPart.reverse().join('');
		const formatedNumber = isnegative ? '-' + stringOfIntPart : stringOfIntPart;

		if (decimals === 0) return formatedNumber;


		let decimalesString = stringRoundNumber.indexOf('.') > -1 ? stringRoundNumber.slice(stringRoundNumber.indexOf('.') + 1) : '';

		if (decimalesString.length < decimals) {
			let diference = decimals - decimalesString.length;
			for (let i = 1; i <= diference; i++) decimalesString += '0';
		}

		return formatedNumber + '.' + decimalesString;
	}

	Module.undoFormatting = arg01 => {

		const string = arg01.split('').filter(char => char !== ',' && char !== '%').join('');
		return parseFloatEN(string);
	}


	return Module;
}({});

export default InputFormatter;