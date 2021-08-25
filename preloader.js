


const PreLoader = function(Module){


	Module.init = args => {

		if (args === undefined) args = '';
		if (typeof args === 'string') return Module.initBasic(args);
		if (typeof args !== 'object') throw 'invalid argument';

		if (args.type === 'progressbar') return Module.initProgressbar(args);
	}

	Module.finish = e => {

		try{
			PreLoader_Metrokubiko_text.innerHTML = '';
			PreLoader_Metrokubiko.style.display = 'none';
		}catch(e){}

		try{
			PreLoader_Metrokubiko_progressBar.style.display = 'none';
			PreLoader_Metrokubiko_progressBar_text.innerHTML = '';
			PreLoader_Metrokubiko_progressBar_bar.children[0].style.width = '0%';
		}catch(e){}
	}

	// Basic PreLoader --------------------------------------------------------------------------------------------------------------

		Module.initBasic = text => {

			if (!window.PreLoader_Metrokubiko) Module.createPreLoader();

			window.PreLoader_Metrokubiko.style.display = 'block';
			window.PreLoader_Metrokubiko_text.innerHTML = text;
		}

		Module.createPreLoader = e => {

			const PreloaderElement = document.createElement('div');

			PreloaderElement.id			= 'PreLoader_Metrokubiko';
			PreloaderElement.style.display	= 'none';
			PreloaderElement.innerHTML		= Module.getHTML();

			document.body.appendChild(PreloaderElement);
		}

	// Basic PreLoader --------------------------------------------------------------------------------------------------------------

	// Progressbar PreLoader --------------------------------------------------------------------------------------------------------

		Module.initProgressbar = args => {

			if (!window.PreLoader_Metrokubiko_progressBar) Module.createProgressbar();

			window.PreLoader_Metrokubiko_progressBar.style.display = 'block';
			window.PreLoader_Metrokubiko_progressBar_text.innerHTML = args.text;
		}

		Module.setProgressbarValue = percentage => {

			const Element = window.PreLoader_Metrokubiko_progressBar_bar.children[0];
			const width = Element.style.width;

			Element.style.width = percentage + '%';

			Element.innerHTML = `
				<style type="text/css">
					#PreLoader_Metrokubiko_progressBar_bar div:first-child{
						animation: PreLoader_progressbar_animation .5s;
					}

					@keyframes PreLoader_progressbar_animation {
						0% {
							width: ${width};
						}
						100% {
							width: ${percentage + '%'};
						}
					}
				</style>
			`;
		}

		Module.createProgressbar = args => {

			const PreloaderElement = document.createElement('div');

			PreloaderElement.id			= 'PreLoader_Metrokubiko_progressBar';
			PreloaderElement.style.display	= 'none';
			PreloaderElement.innerHTML		= Module.getHTMLProgressBar();

			document.body.appendChild(PreloaderElement);
		}

	// Progressbar PreLoader --------------------------------------------------------------------------------------------------------

	return Module;
}({});



PreLoader.getHTML = e => `


	<div id="loader_metrokubiko">
		<div class="loader_metrokubiko__container">
			<div class="loader_metrokubiko__img_loader">
				<div></div>
				<div></div>
				<div></div>
				<img src="https://firebasestorage.googleapis.com/v0/b/copres-firebase.appspot.com/o/CoPres%2Flogo-metrokubiko%2Ffavicon%201.png?alt=media&token=a4a3c74c-736f-4ee1-9f06-98d36d0ba3ac" alt="Logo - metroKUBIKO">
			</div>
			<div class="loader_metrokubiko__text" id="PreLoader_Metrokubiko_text">
				Cargando pagina...
			</div>
		</div>
	</div>
`;


PreLoader.getHTMLProgressBar = e => `

	<style type="text/css">

		#PreLoader_Metrokubiko_progressBar{
			z-index: 4000;
			position: fixed;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			--PreLoader_Metrokubiko_progressBar_color: white;
		}

		#PreLoader_Metrokubiko_progressBar .Overlay{
			position: fixed;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			opacity: .7;
			z-index: -1;
			background-color: black;
		}

		#PreLoader_Metrokubiko_progressBar_text{
			font-weight: 500;
			color: var(--PreLoader_Metrokubiko_progressBar_color);
			text-align: center;
			font-size: 1.1em;
			margin-top: 100px;
			margin-left: calc(50% - 150px);
			margin-right: calc(50% - 150px);
		}

		#PreLoader_Metrokubiko_progressBar_bar{
			position: relative;
			top: 15px;
			width: 400px;
			border-radius: 4px;
			overflow: hidden;
			height: 10px;
			margin-left: calc(50% - 200px);
			margin-right: calc(50% - 200px);
			box-shadow: 0px 0px 1px 0.6px white;
		}

		#PreLoader_Metrokubiko_progressBar_bar div{
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			border-radius: unset;
			background: #ffffff;
		}
	</style>

	<div class="Overlay"></div>

	<div id="PreLoader_Metrokubiko_progressBar_text">Creando base de APUs...</div>

	<div id="PreLoader_Metrokubiko_progressBar_bar">
		<div style="width: 0%;"></div>
	</div>
`;



export default PreLoader;