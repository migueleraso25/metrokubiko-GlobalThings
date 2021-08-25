
let _progressBar = null;

const Progressbar_html = `
	<div class="loader_metrokubiko__progressbar--container">

		<div class="loader_metrokubiko__progressbar--image">
			<img src="https://firebasestorage.googleapis.com/v0/b/copres-firebase.appspot.com/o/CoPres%2Flogo-metrokubiko%2Ffavicon%201.png?alt=media&token=a4a3c74c-736f-4ee1-9f06-98d36d0ba3ac" alt="Logo - metroKUBIKO">
		</div>

		<div class="loader_metrokubiko__progressbar--text">
			
		</div>

		<div class="loader_metrokubiko__progressbar--bar">
			<div class="loader_metrokubiko__progressbar--bar_value"></div>
		</div>

	</div>
`


const init = ({ text }) => {

	text = text || '';

	if (_progressBar) {
		set({ value : 0, text });
		show();
		return;
	}

	_progressBar = document.createElement('div');
	_progressBar.id = 'loader_metrokubiko__progressbar';
	_progressBar.innerHTML = Progressbar_html;

	document.body.appendChild(_progressBar);
	setText(text);
};


const show = () => {
	_progressBar.style.display = '';
}

const hide = () => {
	_progressBar.style.display = 'none';
}


const setValue = (value) => {

	value = parseFloat(value);

	if (value < 0 || value > 100) {
		return;
	}

	const _progressBarValue = _progressBar.querySelector('.loader_metrokubiko__progressbar--bar_value');
	_progressBarValue.style.width = value + '%';
}

const setText = (text) => {
	const _progressBarText = _progressBar.querySelector('.loader_metrokubiko__progressbar--text');
	_progressBarText.innerHTML = text;
}

const set = ({ value, text }) => {
	setText(text);
	setValue(value);
}


const finish = () => {
	hide();
	set({ value : 0, text : '' });
};

export default {
	init,
	set,
	finish,
	setText,
	setValue,
};