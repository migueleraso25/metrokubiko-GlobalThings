var GlobalThings=function(){"use strict";const e=(s=>{s.countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Antarctica","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic","Congo, Republic of the","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Greenland","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Mongolia","Morocco","Monaco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","San Marino"," Sao Tome","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],s.countriesArray=s.countries.map(e=>({value:e,text:e})),s.getServerDate=e=>firebase.functions().httpsCallable("getDate")({}),s.copyJson=e=>JSON.parse(JSON.stringify(e)),s.copyObject=e=>{let a=[];e=JSON.stringify(e,(e,r)=>{if("object"==typeof r&&null!==r){if(a.includes(r))return;a.push(r)}return r});return JSON.parse(e)},s.copyArrayOfObjects=e=>{if(!Array.isArray(e))throw"The argument is not an Array.";return e.map(e=>s.copyObject(e))},s.get_UID=r=>{r=r||15;let a="";var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=o.length;for(let e=0;e<=r;e++)a+=o.charAt(Math.floor(Math.random()*i));return a},s.reduceByID=e=>e.reduce((e,r)=>({...e,[r.id]:r}),{}),s.reduceByParent=e=>e.reduce((e,r)=>({...e,[r.parent]:[...e[r.parent]||[],r]}),{}),s.getDataDoc=e=>e.exists?{...e.data(),id:e.id}:{},s.getArrayCollection=e=>e.docs.map(e=>({...e.data(),id:e.id})),s.error=e=>{Toast.error("Un error ha ocurrido, vuelva a intentarlo más tarde."),console.error(e)},s.Error=e=>{if(console.error(e),"Missing or insufficient permissions."===e?.message)return Toast.error("No tienes permisos para realizar esta acción.");Toast.error("Un error ha ocurrido, vuelva a intentarlo más tarde.")},s.isDate=e=>s.isFunction(e?.getMinutes)&&s.isFunction(e?.getFullYear)&&s.isFunction(e?.getMonth)&&s.isFunction(e?.getTime),s.isFunction=e=>"function"==typeof e,s.compose=(...r)=>e=>r.reduceRight((e,r)=>r(e),e),s.getFileFromUrl=o=>new Promise((r,e)=>{const a=new XMLHttpRequest;a.open("GET",o,!0),a.responseType="json",a.onload=function(){var e=a.status;r(200===e?a.response:null)},a.send()});const a="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",o="abcdefghijklmnñopqrstuvwxyz",i="1234567890",t={},n={},d={};for(let e=0,r=i.length;e<r;e++)n[i[e]]=!0;for(let e=0,r=o.length;e<r;e++)t[o[e]]=!0;for(let e=0,r=a.length;e<r;e++)d[a[e]]="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc"[e];return s.normalizeNIT=a=>{a=parseStringEN(a).toLowerCase();let o="";for(let r=0;r<a.length;r++){let e=a[r];d[e]&&(e=d[e]),("-"===e||n[e]||t[e])&&(o+=e)}return o},s.sendNotification=n=>new Promise((e,r)=>{var a,o=(n=n||{}).emails||[],i=n.mensaje||"",t=n.objeto_usuario_actual||{};iniciarBatchFirebase();for(a of o)agregrarOperacionBatchFirebase("set",db.collection("usuarios_por_email").doc(a).collection("notificaciones").doc(s.get_UID(25)),{activo:!0,email_user_envia:t.email||null,id_user_envia:t.id||null,mensaje:i||"",createAt:new Date});finalizarBatchFirebase(e,e=>{s.error(e),r(e)})}),s.months_with_format_00=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGT","SEP","OCT","NOV","DIC"],s.months_with_format_01=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],s.months_with_format_02=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],s.date_format_DMY_01=e=>"Invalid Date"===(e="object"==typeof e?e:new Date(e))?e:e.getDate()+"-"+s.months_with_format_01[e.getMonth()]+"-"+e.getFullYear(),s.date_format_DMY_02=e=>"Invalid Date"===(e="object"==typeof e?e:new Date(e))?e:e.getDate()+"/"+s.months_with_format_01[e.getMonth()]+"/"+e.getFullYear(),s.date_format_HMS=e=>{if("Invalid Date"===(e="object"==typeof e?e:new Date(e)))return e;var r=9<e.getMinutes()?e.getMinutes():"0"+e.getMinutes(),a=9<e.getSeconds()?e.getSeconds():"0"+e.getSeconds();return e.getHours()+":"+r+":"+a},s.initFirebase=a=>new Promise((e,r)=>{(a=a||{}).callback=e,s.startFirebase(a)}),s.startFirebase=e=>{var r=(e=e||{}).secondaryApp;let s="function"==typeof e.callback?e.callback:e=>{};e.reloadOnAuthChange=!1!==e.reloadOnAuthChange,e.firstAuth=!0,firebase.initializeApp({apiKey:"AIzaSyDxs6wolPauCavVnvRxSZ3KPpZOlb63Ijc",authDomain:"copres-firebase.firebaseapp.com",projectId:"copres-firebase",storageBucket:"copres-firebase.appspot.com"}),r&&(window.SecondaryApp=firebase.initializeApp({apiKey:"AIzaSyDxs6wolPauCavVnvRxSZ3KPpZOlb63Ijc",authDomain:"copres-firebase.firebaseapp.com",projectId:"copres-firebase"},"Secondary")),window.db=firebase.firestore(),window.storage=firebase.storage(),window.currentUser=null,window.firebaseUser=null,firebase.auth().onAuthStateChanged(async a=>{if(e.reloadOnAuthChange||e.firstAuth)if(e.firstAuth=!1,a){a.emailVerified||(window.location.href="../verificar.html");let e=await db.collection("usuarios").doc(a.uid).get(),r={exists:!0};window.currentUser={...e.data(),id:e.id},window.firebaseUser=firebase.auth().currentUser,currentUser.activo||(window.location.href="../index.html");const o=currentUser.id;Object.defineProperty(currentUser,"id",{configurable:!1,get(){return o}});const i=currentUser.id_cuenta;Object.defineProperty(currentUser,"id_cuenta",{configurable:!1,get(){return i}});const t=currentUser.email;Object.defineProperty(currentUser,"email",{configurable:!1,get(){return t}});const n=currentUser.categoria;Object.defineProperty(currentUser,"categoria",{configurable:!1,get(){return n}}),e.exists||(r.exists=!1),currentUser.id_cuenta||"super_administrador"===currentUser.categoria||(r.exists=!1),s(r)}else window.currentUser=null,window.firebaseUser=null,s({exists:!1})},console.error)},s.uploadFile=async e=>{const r=e.file,a=r.name||(new Date).toString(),o=`${e.path}/${r.name}`,i=storage.ref(o),t=i.put(r);return PreLoader.init({text:e.preloaderMessage||`Subiendo: ${a}<br>No cerrar la ventana`,type:"progressbar"}),new Promise((a,e)=>{t.on("state_changed",e=>PreLoader.setProgressbarValue(e.bytesTransferred/e.totalBytes*100),s.error,async e=>{var r=await storage.ref().child(o).getDownloadURL();PreLoader.finish(),a(r)})})},s.startLoader=(e,r)=>{if(!r)return window.Loader_METROKubiko||s.createLoader(),e=e||"",Loader_METROKubiko_text.innerHTML=e,void(Loader_METROKubiko.style.display="block");"progressbar"===r.type&&(window.Loader_METROKubiko_progressBar||s.createProgressBarLoader(),e=e||"",Loader_METROKubiko_progressBar_text.innerHTML=e,Loader_METROKubiko_progressBar.style.display="block")},s.finishLoader=e=>{Loader_METROKubiko_text.innerHTML="",Loader_METROKubiko.style.display="none"},s.createLoader=e=>{if(!window.Loader_METROKubiko||!window.Loader_METROKubiko_text){const r=document.createElement("div");r.id="Loader_METROKubiko",r.style.display="none",r.innerHTML=`

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
				`,document.body.appendChild(r)}},s.createProgressBarLoader=e=>{if(!window.Loader_METROKubiko_progressBar||!window.Loader_METROKubiko_progressBar_text){const r=document.createElement("div");r.id="Loader_METROKubiko_progressBar",r.style.display="none",r.innerHTML=`

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
				`,document.body.appendChild(r)}},s.confirm=a=>new Promise((r,e)=>{new Components.Confirm({content:a.content||"",accept:a.accept||"Accept",cancel:a.cancel||"Cancel",onAccept:e=>r(!0),onCancel:e=>r(!1)})}),s.prompt=o=>new Promise((a,e)=>{var r=parseStringEN(o.text);new Components.Confirm({content:`${r} <input id="GlobalThings_INPUT_prompt" style="margin-top: 10px;" class="Input-mkk"/>`,accept:o.accept||"Accept",cancel:o.cancel||"Cancel",onAccept:e=>{var r=window.GlobalThings_INPUT_prompt.value;a(r)},onCancel:e=>a(!1)}),isFunction(o.oncreate)&&o.oncreate()}),s.Prompt=n=>new Promise((o,e)=>{const r=Array.isArray(n.inputs)?n.inputs:[];var a=r.reduce((e,r,a)=>e+`

					<label style="${r.stylesLabel}">${r.label}</label>

					<input
						class="Input-mkk"
						type="${r.type||"text"}"
						requiredText="${r.requiredText||""}"
						${r.required?'isRequired="true"':""}
						id="${r.id||"GlobalThings_INPUT_prompt_"+a}"
					/>
				`,"");let i=null,t=new Components.Confirm({content:parseStringEN(n.title)+a,accept:n.accept||"Accept",cancel:n.cancel||"Cancel",onAccept:e=>{let r=t.content.getElementsByTagName("input"),a=[];if(!isFunction(window.onSubmitLiveValidation)||onSubmitLiveValidation("GlobalThings_INPUT_prompt")){for(let e=0;e<r.length;e++){if(r[e].getAttribute("isRequired")&&!r[e].value)return Toast.warning(r[e].getAttribute("requiredText")||"Completa los campos requeridos");a.push(r[e].value)}o(a),i()}},onCancel:e=>{o(!1),i()}});t.content.id="GlobalThings_INPUT_prompt",i=t.close,t.close=e=>{},isFunction(n.oncreate)&&n.oncreate()}),s.defaultImgSrc="https://firebasestorage.googleapis.com/v0/b/copres-firebase.appspot.com/o/Uauarios%2F%5Bobject%20HTMLInputElement%5D%2FImagenes%2Fdownload.png?alt=media&token=2d78e0d6-2c4b-42f9-8eab-c29f944629a3",s})({});e.sumArray=(e,a)=>{if(!Array.isArray(e))throw"The first parameter must be an array";return e.reduce((e,r)=>isNumber(r)&&!a?e+r:isObject(r)&&a?e+parseFloatEN(r[a]):e,0)},e.megagrupos=[{codigo:"O",id:"O",insumo:"Mano de Obra",categoria:"megagrupo"},{codigo:"M",id:"M",insumo:"Materiales",categoria:"megagrupo"},{codigo:"E",id:"E",insumo:"Equipos",categoria:"megagrupo"},{codigo:"T",id:"T",insumo:"Transportes",categoria:"megagrupo"},{id:"S",codigo:"S",insumo:"Subcontratos",categoria:"megagrupo"},{id:"IB",codigo:"IB",insumo:"00 - Item Básicos",categoria:"megagrupo"}],e.BrikerCountries=[{id:845,name:"Alemania",currency:"DEU",iso:"DE"},{id:5,name:"Argentina",currency:"ARS",iso:"AR"},{id:849,name:"Australia",currency:"AUS",iso:"AU"},{id:123,name:"Bolivia",currency:"BOB",iso:"BO"},{id:843,name:"Brazil",currency:"BRL",iso:"BR"},{id:842,name:"Canada",currency:"CAD",iso:"CA"},{id:81,name:"Chile",currency:"CLP",iso:"CL"},{id:82,name:"Colombia",currency:"COP",iso:"CO"},{id:36,name:"Costa Rica",currency:"CRC",iso:"CR"},{id:113,name:"Cuba",currency:"CUP",iso:"CU"},{id:103,name:"Ecuador",currency:"USD",iso:"EC"},{id:51,name:"El Salvador",currency:"USD",iso:"SV"},{id:850,name:"Emiratos Árabes Unidos",currency:"AED",iso:"AE"},{id:28,name:"España",currency:"EUR",iso:"ES"},{id:840,name:"Estados Unidos",currency:"USA",iso:"US"},{id:846,name:"Francia",currency:"FRF",iso:"FR"},{id:185,name:"Guatemala",currency:"GTQ",iso:"GT"},{id:137,name:"Honduras",currency:"HNL",iso:"HN"},{id:848,name:"Italia",currency:"ITA",iso:"IT"},{id:42,name:"México",currency:"MXN",iso:"MX"},{id:209,name:"Nicaragua",currency:"NIO",iso:"NI"},{id:155,name:"Países bajos",currency:"NLD",iso:"NL"},{id:124,name:"Panamá",currency:"USD",iso:"PA"},{id:110,name:"Paraguay",currency:"PYG",iso:"PY"},{id:89,name:"Perú",currency:"PEN",iso:"PE"},{id:246,name:"Puerto Rico",currency:"USD",iso:"PR"},{id:841,name:"Reino Unido",currency:"GBP",iso:"GB"},{id:138,name:"República Dominicana",currency:"DOP",iso:"DO"},{id:847,name:"Suecia",currency:"SEK",iso:"SE"},{id:844,name:"Suiza",currency:"CHF",iso:"CH"},{id:111,name:"Uruguay",currency:"UYU",iso:"UY"},{id:95,name:"Venezuela",currency:"VES",iso:"VE"}],e.CountriesObjectBriker=e.reduceByID(e.BrikerCountries),e.CountriesObjectBrikerByName=e.BrikerCountries.reduce((e,r)=>({...e,[r.name]:r})),e.BrikerCurrencies=[{iso:"COP",currency:"Peso Colombiano (COP)"},{iso:"USD",currency:"Dolar Estadounidense (USD)"},{iso:"DOP",currency:"Peso Dominicado (DOP)"},{iso:"MXN",currency:"Peso Mexicano (MXN)"},{iso:"EUR",currency:"EURO (EUR)"}],e.CurrenciesObjectBriker=e.BrikerCurrencies.reduce((e,r)=>({...e,[r.iso]:r})),e.timeOut=r=>new Promise(e=>{setTimeout(e,r||1e3)});const r=((a={}).init=e=>{if("string"==typeof(e=void 0===e?"":e))return a.initBasic(e);if("object"!=typeof e)throw"invalid argument";return"progressbar"===e.type?a.initProgressbar(e):void 0},a.finish=e=>{try{PreLoader_Metrokubiko_text.innerHTML="",PreLoader_Metrokubiko.style.display="none"}catch(e){}try{PreLoader_Metrokubiko_progressBar.style.display="none",PreLoader_Metrokubiko_progressBar_text.innerHTML="",PreLoader_Metrokubiko_progressBar_bar.children[0].style.width="0%"}catch(e){}},a.initBasic=e=>{window.PreLoader_Metrokubiko||a.createPreLoader(),window.PreLoader_Metrokubiko.style.display="block",window.PreLoader_Metrokubiko_text.innerHTML=e},a.createPreLoader=e=>{const r=document.createElement("div");r.id="PreLoader_Metrokubiko",r.style.display="none",r.innerHTML=a.getHTML(),document.body.appendChild(r)},a.initProgressbar=e=>{window.PreLoader_Metrokubiko_progressBar||a.createProgressbar(),window.PreLoader_Metrokubiko_progressBar.style.display="block",window.PreLoader_Metrokubiko_progressBar_text.innerHTML=e.text},a.setProgressbarValue=e=>{const r=window.PreLoader_Metrokubiko_progressBar_bar.children[0];var a=r.style.width;r.style.width=e+"%",r.innerHTML=`
				<style type="text/css">
					#PreLoader_Metrokubiko_progressBar_bar div:first-child{
						animation: PreLoader_progressbar_animation .5s;
					}

					@keyframes PreLoader_progressbar_animation {
						0% {
							width: ${a};
						}
						100% {
							width: ${e+"%"};
						}
					}
				</style>
			`},a.createProgressbar=e=>{const r=document.createElement("div");r.id="PreLoader_Metrokubiko_progressBar",r.style.display="none",r.innerHTML=a.getHTMLProgressBar(),document.body.appendChild(r)},a);var a;r.getHTML=e=>`


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
`,r.getHTMLProgressBar=e=>`

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
`;let o=null;const i=e=>{if(!((e=parseFloat(e))<0||100<e)){const r=o.querySelector(".loader_metrokubiko__progressbar--bar_value");r.style.width=e+"%"}},t=e=>{const r=o.querySelector(".loader_metrokubiko__progressbar--text");r.innerHTML=e},n=({value:e,text:r})=>{t(r),i(e)};var d,s={init:({text:e})=>{if(e=e||"",o)return n({value:0,text:e}),void(o.style.display="");o=document.createElement("div"),o.id="loader_metrokubiko__progressbar",o.innerHTML=`
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
`,document.body.appendChild(o),t(e)},set:n,finish:()=>{o.style.display="none",n({value:0,text:""})},setText:t,setValue:i},c=((d={}).add=(e,r)=>{let a;if(r=r||{},"string"==typeof e)a=document.getElementById(e);else{if("object"!=typeof e||"INPUT"!==e?.tagName&&"input"!==e?.tagName)throw"Not an input";a=e}"percentage"===r.type?d.percentage(a,r):"default"!==r.type&&r.type||d.default(a,r)},d.percentage=(a,o)=>{a.onfocus=e=>{var r=a.value;a.value=d.undoFormatting(r)/100},a.onfocusout=e=>{let r=a.value;isNumber(o.minimum)&&(r=a.value>o.minimum?a.value:o.minimum),a.value=d.format(100*r,o.decimals)+"%"}},d.default=(a,o)=>{a.onfocus=e=>{var r=a.value;a.value=d.undoFormatting(r)},a.onfocusout=e=>{let r=a.value;isNumber(o.minimum)&&(r=a.value>o.minimum?a.value:o.minimum),a.value=d.format(r,o.decimals)}},d.roundOut=(e,r)=>{e=parseFloatEN(e);const a=parseIntEN(r);10<a&&(a=10);r=10**a,r=parseFloat(Math.round(e*r)/r);return parseFloatEN(r)},d.format=(e,r)=>{var a=parseIntEN(r),r=d.roundOut(e,a);const o=String(r);e=r<0,r=e?o.slice(1):o;const i=String(parseIntEN(r)).split("").reverse(),t=i.map((e,r)=>(r+1)%3==0&&i.length-1!==r&&0!==r?","+e:e);r=t.reverse().join(""),r=e?"-"+r:r;if(0===a)return r;let n=-1<o.indexOf(".")?o.slice(o.indexOf(".")+1):"";if(n.length<a){var s=a-n.length;for(let e=1;e<=s;e++)n+="0"}return r+"."+n},d.undoFormatting=e=>{e=e.split("").filter(e=>","!==e&&"%"!==e).join("");return parseFloatEN(e)},d);const l={};const u=(e,r)=>{p.set(r),window.location.hash=e};window.onpopstate=()=>{g()},history.onpushstate=e=>{g()};const p=function(){let r=null;return{get:()=>{var e=JSON.parse(JSON.stringify(r||""));return r=null,e||null},set:e=>{r=e}}}(),g=()=>{const e=window.location.hash.slice(1),r=l.pages[e];if(r){for(const e in l.pages)l.pages[e].frame&&(l.pages[e].frame.style.display="none");if(r.exists)return r.frame.style.display="",void r.onShow(r,p.get());r.exists=!0,r.frame=m(r),l.currentPage=r,r.onInit(r,p.get())}else u(l.defaultPath)},m=e=>{const r=document.createElement("div");return r.classList.add("pathController--frame"),r.setAttribute("pathController--path",e.path),l.parentElement.appendChild(r),r};var b={init:async e=>{var{pages:r,defaultPath:a,parentElement:e}=(e=>{const{pages:r,defaultPath:a,parentElement:o}=e=e||{};for(const i in r)r[i].path=i;return{pages:r||{},defaultPath:a||"",parentElement:o instanceof HTMLElement?o:document.body}})(e);l.pages=r,l.defaultPath=a,l.parentElement=e;const o=window.history,i=o.pushState;o.pushState=function(e){return o.onpushstate(),i.apply(o,arguments)},g()},show:u,getCurrentPage:()=>l.currentPage};return window.searchString=(e,r)=>!(!e||!r)&&-1<e.indexOf(r),window.searchInStringNonStrict=(e,r)=>!(!e||!r)&&(e=e.toLocaleLowerCase(),r=r.toLocaleLowerCase(),-1<e.indexOf(r)),window.isNumber=e=>!isNaN(e),window.isObject=e=>"object"==typeof e,window.isFunction=e=>"function"==typeof e,window.parseIntEN=e=>parseInt(e)?parseInt(e):0,window.parseFloatEN=e=>parseFloat(e)?parseFloat(e):0,window.parseFloatENull=e=>parseFloat(e)?parseFloat(e):null,window.parseFloatEOne=e=>parseFloatEN(e)?parseFloatEN(e):1,window.parseStringEN=e=>e?String(e):"",window.parseDateEN=e=>"object"==typeof e&&(e&&isFunction(e.getTime))?e:null,window.roundedNumber=(e,r)=>{e=parseFloatEN(e);r=10**(r=10<(r=parseIntEN(r))?10:r),r=parseFloat(Math.round(e*r)/r);return parseFloatEN(r)},{...e,PreLoader:r,ProgressBar:s,InputFormatter:c,pathController:b}}();
