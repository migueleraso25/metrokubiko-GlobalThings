









const GlobalThings = (G => {


	// ...............................................................................................................................................................................
	// Global Variables ..............................................................................................................................................................

			G.countries = [ "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda","Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados","Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana","Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde","Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic","Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark","Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea","Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana","Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong","Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan","Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia","Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar","Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia","Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand","Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru","Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome","Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia","Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden","Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago","Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States","Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe" ];
			G.countriesArray = G.countries.map(pais => ({value : pais, text: pais}));

	// Global Variables ..............................................................................................................................................................
	// ...............................................................................................................................................................................


	// ...............................................................................................................................................................................
	// Global Functions ..............................................................................................................................................................

			G.getServerDate = e => firebase.functions().httpsCallable('getDate')({});

			G.copyJson = json => {
				return JSON.parse(JSON.stringify(json));
			}

			G.copyObject = json => {

				let cache = [];

				const stringObject = JSON.stringify(json, (key, value) => {
					if (typeof value === 'object' && value !== null) {
						if (cache.includes(value)) return;
						cache.push(value);
					}
					return value;
				});

				return JSON.parse(stringObject);
			}

			G.copyArrayOfObjects = json => {

				if (!Array.isArray(json)) throw 'The argument is not an Array.'

				const result = json.map(obj => {
					return G.copyObject(obj);
				});

				return result;
			}

			G.get_UID = length => {

				length = length ? length : 15;

				let result				= '';
				let characters			= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				let charactersLength	= characters.length;

				for ( let i = 0; i <= length; i++ ) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
				}

				return result;
			}

			G.reduceByID = arrayReduce => {
				return arrayReduce.reduce((acc,obj) => ({...acc, [obj.id] : obj}),{})
			}

			G.reduceByParent = arrayReduce => {
				return arrayReduce.reduce((acc,obj) => ({...acc, [obj.parent] : [ ...( acc[obj.parent] || [] ), obj ] }),{});
			}

			G.getDataDoc = doc => {

				if (!doc.exists) return {};
				return { ...doc.data(), id: doc.id };
			}

			G.getArrayCollection = collection => {
				return collection.docs.map(doc => ({...doc.data(),id : doc.id}));
			}

			G.error = e => {
				Toast.error('Un error ha ocurrido, vuelva a intentarlo más tarde.');
				console.error(e);
			}

			G.Error = e => {

				console.error(e);

				if (e?.message === 'Missing or insufficient permissions.') return Toast.error('No tienes permisos para realizar esta acción.');

				Toast.error('Un error ha ocurrido, vuelva a intentarlo más tarde.');
			}

			G.isDate = date => {
				return G.isFunction(date?.getMinutes) && G.isFunction(date?.getFullYear) && G.isFunction(date?.getMonth) && G.isFunction(date?.getTime);
			}

			G.isFunction = fun => typeof fun === 'function';

			G.compose = (...functions) => args => functions.reduceRight((args2, func) => func(args2), args);

			// G.runTransaction = objectTransaction => (new Promise((resolve,reject) => {


			// 	db.runTransaction(transaction => {
			// 		return transaction.get(docPaisPublicaciones).then(dataDocPais => {


			// 		});
			// 	})
			// 	.catch(reject);
			// }));


			G.getFileFromUrl = url => new Promise((resolve, reject) => {

				const xhr = new XMLHttpRequest();

				xhr.open('GET', url, true);
				xhr.responseType = 'json';

				xhr.onload = function() {
					let status = xhr.status;
					if (status === 200) resolve(xhr.response)
					else resolve(null)
				};
				xhr.send();
			})


	// Global Functions ..............................................................................................................................................................
	// ...............................................................................................................................................................................





	// ...............................................................................................................................................................................
	// Normalize ..............................................................................................................................................................

			const 	fromEspecial	= "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
					toEspecial		= "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
					abcString		= 'abcdefghijklmnñopqrstuvwxyz',
					numString 		= '1234567890',
					mappingABC		= {},
					mappingNUM		= {},
					mappingEspecial	= {};

			for(let i = 0, j = numString.length; i < j; i++ )
				mappingNUM[numString[i]] = true;

			for(let i = 0, j = abcString.length; i < j; i++ )
				mappingABC[abcString[i]] = true;

			for(let i = 0, j = fromEspecial.length; i < j; i++ )
				mappingEspecial[fromEspecial[i]] = toEspecial[i];

			G.normalizeNIT = string => {

				string = parseStringEN(string).toLowerCase();

				let returnString = '';

				for (let i = 0; i < string.length; i++){
					let chart = string[i];
					if (mappingEspecial[chart]) chart = mappingEspecial[chart];
					if (chart === '-' || mappingNUM[chart] || mappingABC[chart]) returnString += chart;
				}

				return returnString;
			}

	// Normalize ..............................................................................................................................................................
	// ...............................................................................................................................................................................




	// ...............................................................................................................................................................................
	// Notifications ................................................................................................................................................................


		G.sendNotification = objetoConstructor => ( new Promise((resolve,reject) => {

			objetoConstructor = objetoConstructor ? objetoConstructor : {};

			const onError = e => {
				G.error(e);
				reject(e);
			}

			const emails				= objetoConstructor.emails ? objetoConstructor.emails : [];
			const mensaje				= objetoConstructor.mensaje ? objetoConstructor.mensaje : '';
			const objeto_usuario_actual	= objetoConstructor.objeto_usuario_actual ? objetoConstructor.objeto_usuario_actual : {};

			iniciarBatchFirebase();

			for(let email of emails){
				agregrarOperacionBatchFirebase(
					'set',
					db.collection('usuarios_por_email').doc(email).collection('notificaciones').doc(G.get_UID (25)),
					{
						activo 				: true,
						email_user_envia 	: objeto_usuario_actual.email ? objeto_usuario_actual.email : null,
						id_user_envia 		: objeto_usuario_actual.id ? objeto_usuario_actual.id : null,
						mensaje 			: mensaje ? mensaje : '',
						createAt 			: new Date()
					}
				);
			}

			finalizarBatchFirebase(resolve, onError);
		}));


	// Notifications ..............................................................................................................................................................
	// ...............................................................................................................................................................................




	// ...............................................................................................................................................................................
	// Date Formating ................................................................................................................................................................

			G.months_with_format_00 = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGT','SEP','OCT','NOV','DIC']
			G.months_with_format_01 = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
			G.months_with_format_02 = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

			G.date_format_DMY_01 = date => {
				date = typeof date === 'object' ? date : new Date(date);
				if (date === 'Invalid Date') return date;
				return date.getDate() + '-' + G.months_with_format_01[date.getMonth()] + '-' + date.getFullYear();
			}

			G.date_format_DMY_02 = date => {
				date = typeof date === 'object' ? date : new Date(date);
				if (date === 'Invalid Date') return date;
				return date.getDate() + '/' + G.months_with_format_01[date.getMonth()] + '/' + date.getFullYear();
			}

			G.date_format_HMS = date => {
				date = typeof date === 'object' ? date : new Date(date);
				if (date === 'Invalid Date') return date;

				let minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
				let seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();

				return date.getHours() + ':' + minutes + ':' + seconds;
			}

	// Date Formating ................................................................................................................................................................
	// ...............................................................................................................................................................................





	// ...............................................................................................................................................................................
	// Firebase ................................................................................................................................................................


		G.initFirebase = constructor => new Promise((resolve,reject) => {

			constructor = constructor || {};
			constructor.callback = resolve;

			G.startFirebase(constructor)
		})


		G.startFirebase = constructor => {

				constructor		= constructor ? constructor : {};
			let secondaryApp	= constructor.secondaryApp;
			let callback		= typeof constructor.callback === 'function' ? constructor.callback : ev => {};

			constructor.reloadOnAuthChange = constructor.reloadOnAuthChange === false ? false : true;
			constructor.firstAuth = true;

			firebase.initializeApp({
				apiKey: 'AIzaSyDxs6wolPauCavVnvRxSZ3KPpZOlb63Ijc',
				authDomain: "copres-firebase.firebaseapp.com",
				projectId: "copres-firebase",
				storageBucket: "copres-firebase.appspot.com",
			});

			if (secondaryApp) {
				window.SecondaryApp = firebase.initializeApp({
					apiKey: 'AIzaSyDxs6wolPauCavVnvRxSZ3KPpZOlb63Ijc',
					authDomain: "copres-firebase.firebaseapp.com",
					projectId: "copres-firebase"
				}, "Secondary");
			}

			window.db = firebase.firestore();
			window.storage = firebase.storage();
			window.currentUser = null; //user db
			window.firebaseUser = null; //auth

			firebase.auth().onAuthStateChanged(
				async user => {
					if (!constructor.reloadOnAuthChange && !constructor.firstAuth) return
					constructor.firstAuth = false;
					if (user) {
						if(!user.emailVerified) window.location.href = '../verificar.html';

						let userDocument    = await db.collection('usuarios').doc(user.uid).get();
						let objectCallback  = { exists     : true };

						window.currentUser  = ({...userDocument.data(),id: userDocument.id});
						window.firebaseUser = firebase.auth().currentUser;

						if (!currentUser.activo) window.location.href = '../index.html';

						const id = currentUser.id;
						Object.defineProperty(currentUser, 'id', {
							configurable : false,
							get() {return id}
						});

						const id_cuenta = currentUser.id_cuenta;
						Object.defineProperty(currentUser, 'id_cuenta', {
							configurable : false,
							get() {return id_cuenta}
						});

						const email = currentUser.email;
						Object.defineProperty(currentUser, 'email', {
							configurable : false,
							get() {return email}
						});

						const categoria = currentUser.categoria;
						Object.defineProperty(currentUser, 'categoria', {
							configurable : false,
							get() {return categoria}
						});

						if (!userDocument.exists)  objectCallback.exists = false;
						if (!currentUser.id_cuenta && currentUser.categoria !== "super_administrador") objectCallback.exists = false;

						callback(objectCallback)
					}
					else {
						window.currentUser = null;
						window.firebaseUser = null;
						callback({ exists     : false })
					}
				},
				console.error
			);
		}


		/*
			const url = await GlobalThings.uploadFile({
				file	: File,
				path	: someFolder/otherFolder
			})
		*/

		G.uploadFile = async constructorObject => {

			const 	file 		= constructorObject.file,
					fileName 	= file.name || new Date().toString(),
					path 		= `${constructorObject.path}/${file.name}`,
					storageRef 	= storage.ref(path),
					task 		= storageRef.put(file);

			PreLoader.init({
				text	: constructorObject.preloaderMessage || `Subiendo: ${fileName}<br>No cerrar la ventana`,
				type	: 'progressbar'
			});

			return new Promise((resolve, reject) => {
				task.on('state_changed',
					snapshot => PreLoader.setProgressbarValue((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
					G.error,
					async complete => {
						const url = await storage.ref().child(path).getDownloadURL();
						PreLoader.finish();
						resolve(url)
					}
				)
			});
		}


	// Firebase ................................................................................................................................................................
	// ...............................................................................................................................................................................




	// ...............................................................................................................................................................................
	// Preloader ..............................................................................................................................................................


			G.startLoader = (text,constructorObject) => {

				if (!constructorObject) {

					if (!window.Loader_METROKubiko) G.createLoader();

					if (!text) text = '';

					Loader_METROKubiko_text.innerHTML = text;
					Loader_METROKubiko.style.display = 'block';
					return;
				}



				if (constructorObject.type === 'progressbar') {

					if (!window.Loader_METROKubiko_progressBar) G.createProgressBarLoader();

					if (!text) text = '';

					Loader_METROKubiko_progressBar_text.innerHTML = text;
					Loader_METROKubiko_progressBar.style.display = 'block';
					return;
				}


			}

			G.finishLoader = e => {

				Loader_METROKubiko_text.innerHTML = '';
				Loader_METROKubiko.style.display = 'none';
			}

			G.createLoader = text => {

				if (window.Loader_METROKubiko && window.Loader_METROKubiko_text) return;

				const loaderElement = document.createElement('div');

				loaderElement.id			= 'Loader_METROKubiko';
				loaderElement.style.display	= 'none';
				loaderElement.innerHTML		= `

					<style type="text/css">

						#Loader_METROKubiko{
							z-index: 4000;
							position: fixed;
							top: 0px;
							left: 0px;
							height: 100%;
							width: 100%;
							--Loader_METROKubiko_color: white;
						}

						#Loader_METROKubiko .Overlay{
							position: fixed;
							top: 0px;
							left: 0px;
							height: 100%;
							width: 100%;
							opacity: .5;
							z-index: -1;
							background-color: black;
						}

						#Loader_METROKubiko_text{
							position: absolute;
							top: 220px;
							left: calc(50% - 100px);
							width: 200px;
							color: var(--Loader_METROKubiko_color);
							text-align: center;
							font-size: 1.1em;
						}

						#Loader_METROKubiko .Loader{
							position: absolute;
							top: 150px;
							left: calc(50% - 30px);
							height: 60px;
							width: 60px;
						}

						#Loader_METROKubiko .Loader .divLoader{
							box-sizing: border-box;
							position: absolute;
							top: 0px;
							left: 0px;
							width: 60px;
							height: 60px;
							border: 6px solid;
							border-radius: 50%;
							animation: Loader_METROKubiko_animatio 1.5s infinite;
							border-color: var(--Loader_METROKubiko_color) transparent transparent transparent;
						}

						@keyframes Loader_METROKubiko_animatio {
							0% {
								transform: rotate(0deg);
							}
							100% {
								transform: rotate(360deg);
							}
						}

						#Loader_METROKubiko .Loader .divLoader:nth-child(1) {
							animation-delay: -0.45s;
						}

						#Loader_METROKubiko .Loader .divLoader:nth-child(2) {
							animation-delay: -0.3s;
						}

						#Loader_METROKubiko .Loader .divLoader:nth-child(3) {
							animation-delay: -0.15s;
						}

					</style>


					<div class="Overlay"></div>

					<div class="Loader">
						
						<div class="divLoader"></div>
						<div class="divLoader"></div>
						<div class="divLoader"></div>
						<div class="divLoader"></div>

					</div>

					<div id="Loader_METROKubiko_text">Creando base de APUs...</div>
				`;

				document.body.appendChild(loaderElement);
			}

			G.createProgressBarLoader = text => {

				if (window.Loader_METROKubiko_progressBar && window.Loader_METROKubiko_progressBar_text) return;

				const loaderElement = document.createElement('div');

				loaderElement.id			= 'Loader_METROKubiko_progressBar';
				loaderElement.style.display	= 'none';
				loaderElement.innerHTML		= `

					<style type="text/css">

						#Loader_METROKubiko_progressBar{
							z-index: 4000;
							position: fixed;
							top: 0px;
							left: 0px;
							height: 100%;
							width: 100%;
							--Loader_METROKubiko_progressBar_color: white;
						}

						#Loader_METROKubiko_progressBar .Overlay{
							position: fixed;
							top: 0px;
							left: 0px;
							height: 100%;
							width: 100%;
							opacity: .5;
							z-index: -1;
							background-color: black;
						}

						#Loader_METROKubiko_progressBar_text{
							font-weight: 500;
							color: var(--Loader_METROKubiko_progressBar_color);
							text-align: center;
							font-size: 1.1em;
							margin-top: 100px;
							margin-left: calc(50% - 150px);
							margin-right: calc(50% - 150px);
						}

						#Loader_METROKubiko_progressBar_bar{
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

						#Loader_METROKubiko_progressBar_bar div{
							position: absolute;
							top: 0px;
							left: 0px;
							height: 100%;
							border-radius: unset;
							background: #ffffff;
						}

					</style>


					<div class="Overlay"></div>

					<div id="Loader_METROKubiko_progressBar_text">Creando base de APUs...</div>

					<div id="Loader_METROKubiko_progressBar_bar">
						<div style="width: 50%;"></div>
					</div>
				`;

				document.body.appendChild(loaderElement);
			}

	// Preloader ................................................................................................................................................................
	// ...............................................................................................................................................................................






	// ...............................................................................................................................................................................
	// Confirm ................................................................................................................................................................


		G.confirm = ObjectJson => {
			return new Promise((resolve, reject) => {

				const confirm = new Components.Confirm({
					content: ObjectJson.content ? ObjectJson.content : '',
					accept: ObjectJson.accept ? ObjectJson.accept : 'Accept',
					cancel: ObjectJson.cancel ? ObjectJson.cancel : 'Cancel',
					onAccept: e => resolve(true),
					onCancel: e => resolve(false)
				})
			})
		}

		G.prompt = ObjectJson => {
			return new Promise((resolve, reject) => {

				const text = parseStringEN(ObjectJson.text);
				const confirm = new Components.Confirm({
					content:  `${text} <input id="GlobalThings_INPUT_prompt" style="margin-top: 10px;" class="Input-mkk"/>`,
					accept: ObjectJson.accept ? ObjectJson.accept : 'Accept',
					cancel: ObjectJson.cancel ? ObjectJson.cancel : 'Cancel',
					onAccept: e => {
						const response = window.GlobalThings_INPUT_prompt.value
						resolve(response);
					},
					onCancel: e => resolve(false)
				})
				if (isFunction(ObjectJson.oncreate)) ObjectJson.oncreate();
			})
		}

		G.Prompt = ObjectJson => {
			return new Promise((resolve, reject) => {

				const inputs = Array.isArray(ObjectJson.inputs) ? ObjectJson.inputs : [];
				const contentInputs = inputs.reduce((acc, objInput, index) => acc + `

					<label style="${objInput.stylesLabel}">${objInput.label}</label>

					<input
						class="Input-mkk"
						type="${ objInput.type || 'text' }"
						requiredText="${ objInput.requiredText || ''}"
						${objInput.required ? 'isRequired="true"' : ''}
						id="${objInput.id || 'GlobalThings_INPUT_prompt_' + index}"
					/>
				`,'');

				let closePrompt = null;
				let confirm = new Components.Confirm({
					content:  parseStringEN(ObjectJson.title) + contentInputs,
					accept: ObjectJson.accept ? ObjectJson.accept : 'Accept',
					cancel: ObjectJson.cancel ? ObjectJson.cancel : 'Cancel',
					onAccept: e => {

						let inputElements = confirm.content.getElementsByTagName('input');
						let arrayValues = [];

						// LiveValidation ...................................................................................................................... 

							if (
								isFunction(window.onSubmitLiveValidation)
								&&
								!onSubmitLiveValidation('GlobalThings_INPUT_prompt')
							) return;

						// ......................................................................................................................

						// default validation ...................................................................................................................... 

							for (let i = 0; i < inputElements.length; i++) {

								if ( inputElements[i].getAttribute('isRequired') && !inputElements[i].value )
									return Toast.warning(inputElements[i].getAttribute('requiredText') || 'Completa los campos requeridos');

								arrayValues.push(inputElements[i].value);
							}

						// ......................................................................................................................

						resolve(arrayValues);
						closePrompt();
					},
					onCancel: e => {
						resolve(false);
						closePrompt();
					}
				})

				confirm.content.id = 'GlobalThings_INPUT_prompt'
				closePrompt = confirm.close;

				confirm.close = e => {};

				if (isFunction(ObjectJson.oncreate)) ObjectJson.oncreate();
			})
		}

	// Confirm ................................................................................................................................................................
	// ...............................................................................................................................................................................


	G.defaultImgSrc = 'https://firebasestorage.googleapis.com/v0/b/copres-firebase.appspot.com/o/Uauarios%2F%5Bobject%20HTMLInputElement%5D%2FImagenes%2Fdownload.png?alt=media&token=2d78e0d6-2c4b-42f9-8eab-c29f944629a3';




	return G;

})({});



GlobalThings.sumArray = (array, key) => {

	if (!Array.isArray(array)) throw 'The first parameter must be an array';

	const result = array.reduce((acc, element) => {
		if (isNumber(element) && !key) return acc +  element;
		if (isObject(element) && key) return acc + parseFloatEN(element[key]);
		return acc;
	}, 0);

	return result;
}

GlobalThings.megagrupos = [{codigo: "O",id: "O",insumo: "Mano de Obra",categoria: "megagrupo",},{codigo: "M",id: "M",insumo: "Materiales",categoria: "megagrupo",},{codigo: "E",id: "E",insumo: "Equipos",categoria: "megagrupo",},{codigo: "T",id: "T",insumo: "Transportes",categoria: "megagrupo",},{id: "S",codigo: "S",insumo: "Subcontratos",categoria: "megagrupo",},{id: "IB",codigo: "IB",insumo: "00 - Item Básicos",categoria: "megagrupo",}];

GlobalThings.BrikerCountries = [{"id": 845,"name": "Alemania","currency": "DEU","iso": "DE"},{"id": 5,"name": "Argentina","currency": "ARS","iso": "AR"},{"id": 849,"name": "Australia","currency": "AUS","iso": "AU"},{"id": 123,"name": "Bolivia","currency": "BOB","iso": "BO"},{"id": 843,"name": "Brazil","currency": "BRL","iso": "BR"},{"id": 842,"name": "Canada","currency": "CAD","iso": "CA"},{"id": 81,"name": "Chile","currency": "CLP","iso": "CL"},{"id": 82,"name": "Colombia","currency": "COP","iso": "CO"},{"id": 36,"name": "Costa Rica","currency": "CRC","iso": "CR"},{"id": 113,"name": "Cuba","currency": "CUP","iso": "CU"},{"id": 103,"name": "Ecuador","currency": "USD","iso": "EC"},{"id": 51,"name": "El Salvador","currency": "USD","iso": "SV"},{"id": 850,"name": "Emiratos Árabes Unidos","currency": "AED","iso": "AE"},{"id": 28,"name": "España","currency": "EUR","iso": "ES"},{"id": 840,"name": "Estados Unidos","currency": "USA","iso": "US"},{"id": 846,"name": "Francia","currency": "FRF","iso": "FR"},{"id": 185,"name": "Guatemala","currency": "GTQ","iso": "GT"},{"id": 137,"name": "Honduras","currency": "HNL","iso": "HN"},{"id": 848,"name": "Italia","currency": "ITA","iso": "IT"},{"id": 42,"name": "México","currency": "MXN","iso": "MX"},{"id": 209,"name": "Nicaragua","currency": "NIO","iso": "NI"},{"id": 155,"name": "Países bajos","currency": "NLD","iso": "NL"},{"id": 124,"name": "Panamá","currency": "USD","iso": "PA"},{"id": 110,"name": "Paraguay","currency": "PYG","iso": "PY"},{"id": 89,"name": "Perú","currency": "PEN","iso": "PE"},{"id": 246,"name": "Puerto Rico","currency": "USD","iso": "PR"},{"id": 841,"name": "Reino Unido","currency": "GBP","iso": "GB"},{"id": 138,"name": "República Dominicana","currency": "DOP","iso": "DO"},{"id": 847,"name": "Suecia","currency": "SEK","iso": "SE"},{"id": 844,"name": "Suiza","currency": "CHF","iso": "CH"},{"id": 111,"name": "Uruguay","currency": "UYU","iso": "UY"},{"id": 95,"name": "Venezuela","currency": "VES","iso": "VE"}];

GlobalThings.CountriesObjectBriker = GlobalThings.reduceByID(GlobalThings.BrikerCountries);
GlobalThings.CountriesObjectBrikerByName = GlobalThings.BrikerCountries.reduce((acc, obj) => ({ ...acc, [obj.name] : obj }));

GlobalThings.BrikerCurrencies = [{"iso": "COP","currency": "Peso Colombiano (COP)"},{"iso": "USD","currency": "Dolar Estadounidense (USD)"},{"iso": "DOP","currency": "Peso Dominicado (DOP)"},{"iso": "MXN","currency": "Peso Mexicano (MXN)"},{"iso": "EUR","currency": "EURO (EUR)"}];

GlobalThings.CurrenciesObjectBriker = GlobalThings.BrikerCurrencies.reduce((acc, obj) => ({ ...acc, [obj.iso] : obj }));



GlobalThings.timeOut = (miliseconds) => new Promise(resolve => {
	setTimeout(resolve, miliseconds || 1000);
})




export default GlobalThings;
















