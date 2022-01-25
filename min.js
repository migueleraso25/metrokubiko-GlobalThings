var GlobalThings=function(){"use strict";const e=(t=>{t.countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Antarctica","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic","Congo, Republic of the","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Greenland","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Mongolia","Morocco","Monaco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","San Marino"," Sao Tome","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],t.countriesArray=t.countries.map(e=>({value:e,text:e})),t.countriesData=[{code:"AFG",name:"Afghanistan",currency_name:"Afghanistan Afghani",currency_code:"AFN"},{code:"ALB",name:"Albania",currency_name:"Albanian Lek",currency_code:"ALL"},{code:"DZA",name:"Algeria",currency_name:"Algerian Dinar",currency_code:"DZD"},{code:"AND",name:"Andorra",currency_name:"Euro",currency_code:"EUR"},{code:"AGO",name:"Angola",currency_name:"Angolan Kwanza",currency_code:"AON"},{code:"ATG",name:"Antigua and Barbuda",currency_name:"Eastern Caribbean Dollar",currency_code:"XCD"},{code:"ARG",name:"Argentina",currency_name:"Argentine Peso",currency_code:"ARS"},{code:"ARM",name:"Armenia",currency_name:"Dram",currency_code:"AMD"},{code:"AUS",name:"Australia",currency_name:"Australian Dollar",currency_code:"AUD"},{code:"AUT",name:"Austria",currency_name:"Euro",currency_code:"EUR"},{code:"AZE",name:"Azerbaijan",currency_name:"Manat",currency_code:"AZN"},{code:"BHS",name:"Bahamas",currency_name:"Bahamian Dollar",currency_code:"BSD"},{code:"BHR",name:"Bahrain",currency_name:"Baharaini Dinar",currency_code:"BHD"},{code:"BGD",name:"Bangladesh",currency_name:"Taka",currency_code:"BDT"},{code:"BRB",name:"Barbados",currency_name:"Barbados Dollar",currency_code:"BBD"},{code:"BLR",name:"Belarus",currency_name:"Belarusian Ruble",currency_code:"BYN"},{code:"BEL",name:"Belgium",currency_name:"Euro",currency_code:"EUR"},{code:"BLZ",name:"Belize",currency_name:"Belize Dollar",currency_code:"BZD"},{code:"BEN",name:"Benin",currency_name:"CFA Franc",currency_code:"XOF"},{code:"BTN",name:"Bhutan",currency_name:"Ngultrum",currency_code:"BTN"},{code:"BOL",name:"Bolivia ",currency_name:"Boliviano",currency_code:"BOB"},{code:"BIH",name:"Bosnia and Herzegovina",currency_name:"Convertible Mark",currency_code:"BAM"},{code:"BWA",name:"Botswana",currency_name:"Botswana Pula",currency_code:"BWP"},{code:"BRA",name:"Brazil",currency_name:"Brazilian Real",currency_code:"BRL"},{code:"BRN",name:"Brunei Darussalam",currency_name:"Brunei Dollar",currency_code:"BND"},{code:"BGR",name:"Bulgaria",currency_name:"Bulgarian Lev",currency_code:"BGL"},{code:"BFA",name:"Burkina Faso",currency_name:"CFA Franc",currency_code:"XOF"},{code:"BDI",name:"Burundi",currency_name:"Burundi Franc",currency_code:"BIF"},{code:"CPV",name:"Cabo Verde Republic of",currency_name:"Cape Verde Escudo",currency_code:"CVE"},{code:"KHM",name:"Cambodia",currency_name:"Riel",currency_code:"KHR"},{code:"CMR",name:"Cameroon",currency_name:"CFA Franc",currency_code:"XAF"},{code:"CAN",name:"Canada",currency_name:"Canadian Dollar",currency_code:"CAD"},{code:"CAF",name:"Central African Republic",currency_name:"CFA Franc",currency_code:"XAF"},{code:"TCD",name:"Chad",currency_name:"CFA Franc",currency_code:"XAF"},{code:"CHL",name:"Chile",currency_name:"Chilean Peso",currency_code:"CLP"},{code:"CHN",name:"China",currency_name:"Yuan Renminbi",currency_code:"CNY"},{code:"COL",name:"Colombia",currency_name:"Colombian Peso",currency_code:"COP"},{code:"COM",name:"Comoros",currency_name:"Comoros Franc",currency_code:"KMF"},{code:"COG",name:"Congo",currency_name:"CFA Franc",currency_code:"XAF"},{code:"COK",name:"Cook Islands",currency_name:"New Zealand Dollar",currency_code:"NZD"},{code:"CRI",name:"Costa Rica",currency_name:"Costa Rican Colone",currency_code:"CRC"},{code:"CIV",name:"Côte d'Ivoire",currency_name:"CFA Franc",currency_code:"XAF"},{code:"HRV",name:"Croatia",currency_name:"Kuna",currency_code:"HRK"},{code:"CUB",name:"Cuba",currency_name:"Cuban Peso",currency_code:"CUP"},{code:"CYP",name:"Cyprus",currency_name:"Euro",currency_code:"EUR"},{code:"CZE",name:"Czech Republic",currency_name:"Euro",currency_code:"EUR"},{code:"PRK",name:"Democratic People's Republic of Korea",currency_name:"North Korean Won",currency_code:"KPW"},{code:"COD",name:"Democratic Republic of the Congo",currency_name:"Congolese Franc",currency_code:"CDF"},{code:"DNK",name:"Denmark",currency_name:"Danish Krone",currency_code:"DKK"},{code:"DJI",name:"Djibouti",currency_name:"Djibouti Franc",currency_code:"DJF"},{code:"DMA",name:"Dominica",currency_name:"Eastern Caribbean Dollar",currency_code:"XCD"},{code:"DOM",name:"Dominican Republic",currency_name:"Dominican Peso",currency_code:"DOP"},{code:"ECU",name:"Ecuador",currency_name:"US Dollar",currency_code:"USD"},{code:"EGY",name:"Egypt",currency_name:"Egyptian Pound",currency_code:"EGP"},{code:"SLV",name:"El Salvador",currency_name:"US Dollar",currency_code:"USD"},{code:"GNQ",name:"Equatorial Guinea",currency_name:"CFA Franc",currency_code:"XAF"},{code:"ERI",name:"Eritrea",currency_name:"Nakfa",currency_code:"ERN"},{code:"EST",name:"Estonia",currency_name:"Euro",currency_code:"EUR"},{code:"SWZ",name:"Eswatini",currency_name:"Lilangeni",currency_code:"SZL"},{code:"ETH",name:"Ethiopia",currency_name:"Ethiopian Birr",currency_code:"ETB"},{code:"FJI",name:"Fiji",currency_name:"Fiji Dollar",currency_code:"FJD"},{code:"FIN",name:"Finland",currency_name:"Euro",currency_code:"EUR"},{code:"FRA",name:"France",currency_name:"Euro",currency_code:"EUR"},{code:"GAB",name:"Gabon",currency_name:"CFA Franc",currency_code:"XAF"},{code:"GMB",name:"Gambia",currency_name:"Gambian Dalasi",currency_code:"GMD"},{code:"GEO",name:"Georgia",currency_name:"Lari",currency_code:"GEL"},{code:"DEU",name:"Germany",currency_name:"Euro",currency_code:"EUR"},{code:"GHA",name:"Ghana",currency_name:"Ghana Cedi",currency_code:"GHC"},{code:"GRC",name:"Greece",currency_name:"Euro",currency_code:"EUR"},{code:"GRD",name:"Grenada",currency_name:"Eastern Caribbean Dollar",currency_code:"XCD"},{code:"GTM",name:"Guatemala",currency_name:"Guatemalan Quetzal",currency_code:"GTQ"},{code:"GIN",name:"Guinea",currency_name:"Guinea Franc",currency_code:"GNF"},{code:"GNB",name:"Guinea‐Bissau",currency_name:"CFA Franc",currency_code:"XAF"},{code:"GUY",name:"Guyana",currency_name:"Guyana Dollar",currency_code:"GYD"},{code:"HTI",name:"Haiti",currency_name:"Haitian Gourde",currency_code:"HTG"},{code:"HND",name:"Honduras",currency_name:"Honduran Lempira",currency_code:"HNL"},{code:"HUN",name:"Hungary",currency_name:"Hungarian Forint",currency_code:"HUF"},{code:"ISL",name:"Iceland",currency_name:"Icelandic Krona",currency_code:"ISK"},{code:"IND",name:"India",currency_name:"Indian Rupee",currency_code:"INR"},{code:"IDN",name:"Indonesia",currency_name:"Indonesian Rupiah",currency_code:"IDR"},{code:"IRN",name:"Iran",currency_name:"Iranian Rial",currency_code:"IRR"},{code:"IRQ",name:"Iraq",currency_name:"Iraqi Dinar",currency_code:"IQD"},{code:"IRL",name:"Ireland",currency_name:"Euro",currency_code:"EUR"},{code:"ISR",name:"Israel",currency_name:"New Sheqel",currency_code:"ILS"},{code:"ITA",name:"Italy",currency_name:"Euro",currency_code:"EUR"},{code:"JAM",name:"Jamaica",currency_name:"Jamaican Dollar",currency_code:"JMD"},{code:"JPN",name:"Japan",currency_name:"Japanese Yen",currency_code:"JPY"},{code:"JOR",name:"Jordan",currency_name:"Jordanian Dinar",currency_code:"JOD"},{code:"KAZ",name:"Kazakhstan",currency_name:"Tenge",currency_code:"KZT"},{code:"KEN",name:"Kenya",currency_name:"Kenyan Shilling",currency_code:"KES"},{code:"KIR",name:"Kiribati",currency_name:"Australian Dollar",currency_code:"AUD"},{code:"KWT",name:"Kuwait",currency_name:"Kuwaiti Dinar",currency_code:"KWD"},{code:"KGZ",name:"Kyrgyzstan",currency_name:"Som",currency_code:"KGS"},{code:"LAO",name:"Lao People's Democratic Republic",currency_name:"Kip",currency_code:"LAK"},{code:"LVA",name:"Latvia",currency_name:"Euro",currency_code:"EUR"},{code:"LBN",name:"Lebanon",currency_name:"Lebanese Pound",currency_code:"LBP"},{code:"LSO",name:"Lesotho",currency_name:"Lesotho Loti",currency_code:"LSL"},{code:"LBR",name:"Liberia",currency_name:"Liberian Dollar",currency_code:"LRD"},{code:"LBY",name:"Libya",currency_name:"Libyan Dinar",currency_code:"LYD"},{code:"LTU",name:"Lithuania",currency_name:"Euro",currency_code:"EUR"},{code:"LUX",name:"Luxembourg",currency_name:"Euro",currency_code:"EUR"},{code:"MDG",name:"Madagascar",currency_name:"Malagasy Ariary",currency_code:"MGA"},{code:"MWI",name:"Malawi",currency_name:"Malawian Kwacha",currency_code:"MWK"},{code:"MYS",name:"Malaysia",currency_name:"Ringgit",currency_code:"MYR"},{code:"MDV",name:"Maldives",currency_name:"Rufiyaa",currency_code:"MVR"},{code:"MLI",name:"Mali",currency_name:"CFA Franc",currency_code:"XOF"},{code:"MLT",name:"Malta",currency_name:"Euro",currency_code:"EUR"},{code:"MHL",name:"Marshall Islands",currency_name:"US Dollar",currency_code:"USD"},{code:"MRT",name:"Mauritania",currency_name:"New Ouguiya",currency_code:"MRU"},{code:"MUS",name:"Mauritius",currency_name:"Mauritius Rupee",currency_code:"MUR"},{code:"MEX",name:"Mexico",currency_name:"Mexican Peso",currency_code:"MXN"},{code:"FSM",name:"Micronesia (Federated States of)",currency_name:"US Dollar",currency_code:"USD"},{code:"MCO",name:"Monaco",currency_name:"Euro",currency_code:"EUR"},{code:"MNG",name:"Mongolia",currency_name:"Tugrik",currency_code:"MNT"},{code:"MNE",name:"Montenegro",currency_name:"Euro",currency_code:"EUR"},{code:"MAR",name:"Morocco",currency_name:"Moroccan Dirham",currency_code:"MAD"},{code:"MOZ",name:"Mozambique",currency_name:"Mozambican Metical",currency_code:"MZM"},{code:"MMR",name:"Myanmar",currency_name:"Kyat",currency_code:"MMK"},{code:"NAM",name:"Namibia",currency_name:"Namibian Dollar",currency_code:"NAD"},{code:"NRU",name:"Nauru",currency_name:"Australian Dollar",currency_code:"AUD"},{code:"NPL",name:"Nepal",currency_name:"Nepalese Rupee",currency_code:"NPR"},{code:"NLD",name:"Netherlands",currency_name:"Euro",currency_code:"EUR"},{code:"NZL",name:"New Zealand",currency_name:"New Zealand Dollar",currency_code:"NZD"},{code:"NIC",name:"Nicaragua",currency_name:"Nicaraguan Cordoba Oro",currency_code:"NIO"},{code:"NER",name:"Niger",currency_name:"CFA Franc",currency_code:"XOF"},{code:"NGA",name:"Nigeria",currency_name:"Naira",currency_code:"NGN"},{code:"NIU",name:"Niue",currency_name:"New Zealand Dollar",currency_code:"NZD"},{code:"NOR",name:"Norway",currency_name:"Norway Krone",currency_code:"NOK"},{code:"OMN",name:"Oman",currency_name:"Omani Rial",currency_code:"OMR"},{code:"PAK",name:"Pakistan",currency_name:"Pakistani Rupee",currency_code:"PKR"},{code:"PLW",name:"Palau",currency_name:"US Dollar",currency_code:"USD"},{code:"PAN",name:"Panama",currency_name:"Balboa",currency_code:"PAB"},{code:"PNG",name:"Papua New Guinea",currency_name:"Kina",currency_code:"PGK"},{code:"PRY",name:"Paraguay",currency_name:"Guarani",currency_code:"PYG"},{code:"PER",name:"Peru",currency_name:"Nuevo Sol",currency_code:"PEN"},{code:"PHL",name:"Philippines",currency_name:"Philippines Peso",currency_code:"PHP"},{code:"POL",name:"Poland",currency_name:"Zloty",currency_code:"PLN"},{code:"PRT",name:"Portugal",currency_name:"Euro",currency_code:"EUR"},{code:"QAT",name:"Qatar",currency_name:"Qatar Rial",currency_code:"QAR"},{code:"KOR",name:"Republic of Korea",currency_name:"Won",currency_code:"KRW"},{code:"MDA",name:"Republic of Moldova",currency_name:"Moldova Leu",currency_code:"MDL"},{code:"ROU",name:"Romania",currency_name:"Romania Leu",currency_code:"RON"},{code:"RUS",name:"Russian Federation",currency_name:"Rouble",currency_code:"RUB"},{code:"RWA",name:"Rwanda",currency_name:"Rwandan Franc",currency_code:"RWF"},{code:"KNA",name:"Saint Kitts and Nevis",currency_name:"Eastern Caribbean Dollar",currency_code:"XCD"},{code:"LCA",name:"Saint Lucia",currency_name:"Eastern Caribbean Dollar",currency_code:"XCD"},{code:"VCT",name:"Saint Vincent and the Grenadines",currency_name:"Eastern Caribbean Dollar",currency_code:"XCD"},{code:"WSM",name:"Samoa",currency_name:"Tala",currency_code:"WST"},{code:"SMR",name:"San Marino",currency_name:"Euro",currency_code:"EUR"},{code:"STP",name:"Sao Tome and Principe",currency_name:"New Dobra",currency_code:"STN"},{code:"SAU",name:"Saudi Arabia",currency_name:"Saudi Riyal",currency_code:"SAR"},{code:"SEN",name:"Senegal",currency_name:"CFA Franc",currency_code:"XOF"},{code:"SRB",name:"Serbia",currency_name:"Serbian Dinar",currency_code:"RSD"},{code:"SYC",name:"Seychelles",currency_name:"Seychelles Rupee",currency_code:"SCR"},{code:"SLE",name:"Sierra Leone",currency_name:"Leone",currency_code:"SLL"},{code:"SGP",name:"Singapore",currency_name:"Singapore Dollar",currency_code:"SGD"},{code:"SVK",name:"Slovakia",currency_name:"Euro",currency_code:"EUR"},{code:"SVN",name:"Slovenia",currency_name:"Euro",currency_code:"EUR"},{code:"SLB",name:"Solomon Islands",currency_name:"Solomon Dollar",currency_code:"SBD"},{code:"SOM",name:"Somalia",currency_name:"Somalian Shilling",currency_code:"SOS"},{code:"ZAF",name:"South Africa",currency_name:"Rand",currency_code:"ZAR"},{code:"SSD",name:"South Sudan",currency_name:"South Sudanese Pound",currency_code:"SSP"},{code:"ESP",name:"Spain",currency_name:"Euro",currency_code:"EUR"},{code:"LKA",name:"Sri Lanka",currency_name:"Sri Lanka Rupee",currency_code:"LKR"},{code:"SDN",name:"Sudan",currency_name:"Sudanese Pound",currency_code:"SDG"},{code:"SUR",name:"Suriname",currency_name:"Surinamese Dollar",currency_code:"SRD"},{code:"SWE",name:"Sweden",currency_name:"Swedish Krona",currency_code:"SEK"},{code:"CHE",name:"Switzerland",currency_name:"Swiss Franc",currency_code:"CHF"},{code:"SYR",name:"Syria",currency_name:"Syrian Pound",currency_code:"SYP"},{code:"TJK",name:"Tajikistan",currency_name:"Somoni",currency_code:"TJS"},{code:"THA",name:"Thailand",currency_name:"Bhat",currency_code:"THB"},{code:"MKD",name:"The Republic of North Macedonia",currency_name:"Denar",currency_code:"MKD"},{code:"TLS",name:"Timor‐Leste",currency_name:"US Dollar",currency_code:"USD"},{code:"TGO",name:"Togo",currency_name:"CFA Franc",currency_code:"XOF"},{code:"TON",name:"Tonga",currency_name:"Pa'anga",currency_code:"TOP"},{code:"TTO",name:"Trinidad and Tobago",currency_name:"Trinidad and Tobago Dollar",currency_code:"TTD"},{code:"TUN",name:"Tunisia",currency_name:"Tunisian Dinar",currency_code:"TND"},{code:"TUR",name:"Turkey",currency_name:"Turkish Lira",currency_code:"TRY"},{code:"TKM",name:"Turkmenistan",currency_name:"New Manat",currency_code:"TMT"},{code:"TUV",name:"Tuvalu",currency_name:"Australian Dollar",currency_code:"AUD"},{code:"UGA",name:"Uganda",currency_name:"Ugandan shilling",currency_code:"UGS"},{code:"UKR",name:"Ukraine",currency_name:"Hryvnia",currency_code:"UAH"},{code:"ARE",name:"United Arab Emirates",currency_name:"U.A.Emirates Dirham",currency_code:"AED"},{code:"GBR",name:"United Kingdom",currency_name:"Pound Sterling",currency_code:"GBP"},{code:"TZA",name:"United Republic of Tanzania",currency_name:"Tanzanian Shilling",currency_code:"TZS"},{code:"USA",name:"United States of America",currency_name:"US Dollar",currency_code:"USD"},{code:"URY",name:"Uruguay",currency_name:"Uruguayan Peso",currency_code:"UYU"},{code:"UZB",name:"Uzbekistan",currency_name:"Sum",currency_code:"UZS"},{code:"VUT",name:"Vanuatu",currency_name:"Vatu",currency_code:"VUV"},{code:"VEN",name:"Venezuela (Bolivarian Republic of)",currency_name:"Bolivar Fuerte",currency_code:"VEF"},{code:"VNM",name:"Viet Nam",currency_name:"Dong",currency_code:"VND"},{code:"YEM",name:"Yemen",currency_name:"Yemeni Rial",currency_code:"YER"},{code:"ZMB",name:"Zambia",currency_name:"Kwacha",currency_code:"ZMK"},{code:"ZWE",name:"Zimbabwe",currency_name:"US Dollar",currency_code:"ZWD"}],t.getServerDate=e=>firebase.functions().httpsCallable("getDate")({}),t.copyJson=e=>JSON.parse(JSON.stringify(e)),t.copyObject=e=>{let a=[];e=JSON.stringify(e,(e,r)=>{if("object"==typeof r&&null!==r){if(a.includes(r))return;a.push(r)}return r});return JSON.parse(e)},t.copyArrayOfObjects=e=>{if(!Array.isArray(e))throw"The argument is not an Array.";return e.map(e=>t.copyObject(e))},t.get_UID=r=>{r=r||15;let a="";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=n.length;for(let e=0;e<=r;e++)a+=n.charAt(Math.floor(Math.random()*c));return a},t.reduceByID=e=>e.reduce((e,r)=>({...e,[r.id]:r}),{}),t.reduceByParent=e=>e.reduce((e,r)=>({...e,[r.parent]:[...e[r.parent]||[],r]}),{}),t.getDataDoc=e=>e.exists?{...e.data(),id:e.id}:{},t.getArrayCollection=e=>e.docs.map(e=>({...e.data(),id:e.id})),t.error=e=>{Toast.error("Un error ha ocurrido, vuelva a intentarlo más tarde."),console.error(e)},t.Error=e=>{if(console.error(e),"Missing or insufficient permissions."===e?.message)return Toast.error("No tienes permisos para realizar esta acción.");Toast.error("Un error ha ocurrido, vuelva a intentarlo más tarde.")},t.isDate=e=>t.isFunction(e?.getMinutes)&&t.isFunction(e?.getFullYear)&&t.isFunction(e?.getMonth)&&t.isFunction(e?.getTime),t.isFunction=e=>"function"==typeof e,t.compose=(...r)=>e=>r.reduceRight((e,r)=>r(e),e),t.getFileFromUrl=n=>new Promise((r,e)=>{const a=new XMLHttpRequest;a.open("GET",n,!0),a.responseType="json",a.onload=function(){var e=a.status;r(200===e?a.response:null)},a.send()});const a="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",n="abcdefghijklmnñopqrstuvwxyz",c="1234567890",o={},i={},d={};for(let e=0,r=c.length;e<r;e++)i[c[e]]=!0;for(let e=0,r=n.length;e<r;e++)o[n[e]]=!0;for(let e=0,r=a.length;e<r;e++)d[a[e]]="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc"[e];return t.normalizeNIT=a=>{a=parseStringEN(a).toLowerCase();let n="";for(let r=0;r<a.length;r++){let e=a[r];d[e]&&(e=d[e]),("-"===e||i[e]||o[e])&&(n+=e)}return n},t.sendNotification=i=>new Promise((e,r)=>{var a,n=(i=i||{}).emails||[],c=i.mensaje||"",o=i.objeto_usuario_actual||{};iniciarBatchFirebase();for(a of n)agregrarOperacionBatchFirebase("set",db.collection("usuarios_por_email").doc(a).collection("notificaciones").doc(t.get_UID(25)),{activo:!0,email_user_envia:o.email||null,id_user_envia:o.id||null,mensaje:c||"",createAt:new Date});finalizarBatchFirebase(e,e=>{t.error(e),r(e)})}),t.months_with_format_00=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGT","SEP","OCT","NOV","DIC"],t.months_with_format_01=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],t.months_with_format_02=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],t.date_format_DMY_01=e=>"Invalid Date"===(e="object"==typeof e?e:new Date(e))?e:e.getDate()+"-"+t.months_with_format_01[e.getMonth()]+"-"+e.getFullYear(),t.date_format_DMY_02=e=>"Invalid Date"===(e="object"==typeof e?e:new Date(e))?e:e.getDate()+"/"+t.months_with_format_01[e.getMonth()]+"/"+e.getFullYear(),t.date_format_HMS=e=>{if("Invalid Date"===(e="object"==typeof e?e:new Date(e)))return e;var r=9<e.getMinutes()?e.getMinutes():"0"+e.getMinutes(),a=9<e.getSeconds()?e.getSeconds():"0"+e.getSeconds();return e.getHours()+":"+r+":"+a},t.initFirebase=a=>new Promise((e,r)=>{(a=a||{}).callback=e,t.startFirebase(a)}),t.startFirebase=e=>{var r=(e=e||{}).secondaryApp;let t="function"==typeof e.callback?e.callback:e=>{};e.reloadOnAuthChange=!1!==e.reloadOnAuthChange,e.firstAuth=!0,firebase.initializeApp({apiKey:"AIzaSyDxs6wolPauCavVnvRxSZ3KPpZOlb63Ijc",authDomain:"copres-firebase.firebaseapp.com",projectId:"copres-firebase",storageBucket:"copres-firebase.appspot.com"}),r&&(window.SecondaryApp=firebase.initializeApp({apiKey:"AIzaSyDxs6wolPauCavVnvRxSZ3KPpZOlb63Ijc",authDomain:"copres-firebase.firebaseapp.com",projectId:"copres-firebase"},"Secondary")),window.db=firebase.firestore(),window.storage=firebase.storage(),window.currentUser=null,window.firebaseUser=null,firebase.auth().onAuthStateChanged(async a=>{if(e.reloadOnAuthChange||e.firstAuth)if(e.firstAuth=!1,a){a.emailVerified||(window.location.href="../verificar.html");let e=await db.collection("usuarios").doc(a.uid).get(),r={exists:!0};window.currentUser={...e.data(),id:e.id},window.firebaseUser=firebase.auth().currentUser,currentUser.activo||(window.location.href="../index.html");const n=currentUser.id;Object.defineProperty(currentUser,"id",{configurable:!1,get(){return n}});const c=currentUser.id_cuenta;Object.defineProperty(currentUser,"id_cuenta",{configurable:!1,get(){return c}});const o=currentUser.email;Object.defineProperty(currentUser,"email",{configurable:!1,get(){return o}});const i=currentUser.categoria;Object.defineProperty(currentUser,"categoria",{configurable:!1,get(){return i}}),e.exists||(r.exists=!1),currentUser.id_cuenta||"super_administrador"===currentUser.categoria||(r.exists=!1),t(r)}else window.currentUser=null,window.firebaseUser=null,t({exists:!1})},console.error)},t.uploadFile=async e=>{const r=e.file,a=r.name||(new Date).toString(),n=`${e.path}/${r.name}`,c=storage.ref(n),o=c.put(r);return PreLoader.init({text:e.preloaderMessage||`Subiendo: ${a}<br>No cerrar la ventana`,type:"progressbar"}),new Promise((a,e)=>{o.on("state_changed",e=>PreLoader.setProgressbarValue(e.bytesTransferred/e.totalBytes*100),t.error,async e=>{var r=await storage.ref().child(n).getDownloadURL();PreLoader.finish(),a(r)})})},t.startLoader=(e,r)=>{if(!r)return window.Loader_METROKubiko||t.createLoader(),e=e||"",Loader_METROKubiko_text.innerHTML=e,void(Loader_METROKubiko.style.display="block");"progressbar"===r.type&&(window.Loader_METROKubiko_progressBar||t.createProgressBarLoader(),e=e||"",Loader_METROKubiko_progressBar_text.innerHTML=e,Loader_METROKubiko_progressBar.style.display="block")},t.finishLoader=e=>{Loader_METROKubiko_text.innerHTML="",Loader_METROKubiko.style.display="none"},t.createLoader=e=>{if(!window.Loader_METROKubiko||!window.Loader_METROKubiko_text){const r=document.createElement("div");r.id="Loader_METROKubiko",r.style.display="none",r.innerHTML=`

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
				`,document.body.appendChild(r)}},t.createProgressBarLoader=e=>{if(!window.Loader_METROKubiko_progressBar||!window.Loader_METROKubiko_progressBar_text){const r=document.createElement("div");r.id="Loader_METROKubiko_progressBar",r.style.display="none",r.innerHTML=`

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
				`,document.body.appendChild(r)}},t.confirm=a=>new Promise((r,e)=>{new Components.Confirm({content:a.content||"",accept:a.accept||"Accept",cancel:a.cancel||"Cancel",onAccept:e=>r(!0),onCancel:e=>r(!1)})}),t.prompt=n=>new Promise((a,e)=>{var r=parseStringEN(n.text);new Components.Confirm({content:`${r} <input id="GlobalThings_INPUT_prompt" style="margin-top: 10px;" class="Input-mkk"/>`,accept:n.accept||"Accept",cancel:n.cancel||"Cancel",onAccept:e=>{var r=window.GlobalThings_INPUT_prompt.value;a(r)},onCancel:e=>a(!1)}),isFunction(n.oncreate)&&n.oncreate()}),t.Prompt=i=>new Promise((n,e)=>{const r=Array.isArray(i.inputs)?i.inputs:[];var a=r.reduce((e,r,a)=>e+`

					<label style="${r.stylesLabel}">${r.label}</label>

					<input
						class="Input-mkk"
						type="${r.type||"text"}"
						requiredText="${r.requiredText||""}"
						${r.required?'isRequired="true"':""}
						id="${r.id||"GlobalThings_INPUT_prompt_"+a}"
					/>
				`,"");let c=null,o=new Components.Confirm({content:parseStringEN(i.title)+a,accept:i.accept||"Accept",cancel:i.cancel||"Cancel",onAccept:e=>{let r=o.content.getElementsByTagName("input"),a=[];if(!isFunction(window.onSubmitLiveValidation)||onSubmitLiveValidation("GlobalThings_INPUT_prompt")){for(let e=0;e<r.length;e++){if(r[e].getAttribute("isRequired")&&!r[e].value)return Toast.warning(r[e].getAttribute("requiredText")||"Completa los campos requeridos");a.push(r[e].value)}n(a),c()}},onCancel:e=>{n(!1),c()}});o.content.id="GlobalThings_INPUT_prompt",c=o.close,o.close=e=>{},isFunction(i.oncreate)&&i.oncreate()}),t.defaultImgSrc="https://firebasestorage.googleapis.com/v0/b/copres-firebase.appspot.com/o/Uauarios%2F%5Bobject%20HTMLInputElement%5D%2FImagenes%2Fdownload.png?alt=media&token=2d78e0d6-2c4b-42f9-8eab-c29f944629a3",t})({});e.sumArray=(e,a)=>{if(!Array.isArray(e))throw"The first parameter must be an array";return e.reduce((e,r)=>isNumber(r)&&!a?e+r:isObject(r)&&a?e+parseFloatEN(r[a]):e,0)},e.megagrupos=[{codigo:"O",id:"O",insumo:"Mano de Obra",categoria:"megagrupo"},{codigo:"M",id:"M",insumo:"Materiales",categoria:"megagrupo"},{codigo:"E",id:"E",insumo:"Equipos",categoria:"megagrupo"},{codigo:"T",id:"T",insumo:"Transportes",categoria:"megagrupo"},{id:"S",codigo:"S",insumo:"Subcontratos",categoria:"megagrupo"},{id:"IB",codigo:"IB",insumo:"00 - Item Básicos",categoria:"megagrupo"}],e.BrikerCountries=[{id:845,name:"Alemania",currency:"DEU",iso:"DE"},{id:5,name:"Argentina",currency:"ARS",iso:"AR"},{id:849,name:"Australia",currency:"AUS",iso:"AU"},{id:123,name:"Bolivia",currency:"BOB",iso:"BO"},{id:843,name:"Brazil",currency:"BRL",iso:"BR"},{id:842,name:"Canada",currency:"CAD",iso:"CA"},{id:81,name:"Chile",currency:"CLP",iso:"CL"},{id:82,name:"Colombia",currency:"COP",iso:"CO"},{id:36,name:"Costa Rica",currency:"CRC",iso:"CR"},{id:113,name:"Cuba",currency:"CUP",iso:"CU"},{id:103,name:"Ecuador",currency:"USD",iso:"EC"},{id:51,name:"El Salvador",currency:"USD",iso:"SV"},{id:850,name:"Emiratos Árabes Unidos",currency:"AED",iso:"AE"},{id:28,name:"España",currency:"EUR",iso:"ES"},{id:840,name:"Estados Unidos",currency:"USA",iso:"US"},{id:846,name:"Francia",currency:"FRF",iso:"FR"},{id:185,name:"Guatemala",currency:"GTQ",iso:"GT"},{id:137,name:"Honduras",currency:"HNL",iso:"HN"},{id:848,name:"Italia",currency:"ITA",iso:"IT"},{id:42,name:"México",currency:"MXN",iso:"MX"},{id:209,name:"Nicaragua",currency:"NIO",iso:"NI"},{id:155,name:"Países bajos",currency:"NLD",iso:"NL"},{id:124,name:"Panamá",currency:"USD",iso:"PA"},{id:110,name:"Paraguay",currency:"PYG",iso:"PY"},{id:89,name:"Perú",currency:"PEN",iso:"PE"},{id:246,name:"Puerto Rico",currency:"USD",iso:"PR"},{id:841,name:"Reino Unido",currency:"GBP",iso:"GB"},{id:138,name:"República Dominicana",currency:"DOP",iso:"DO"},{id:847,name:"Suecia",currency:"SEK",iso:"SE"},{id:844,name:"Suiza",currency:"CHF",iso:"CH"},{id:111,name:"Uruguay",currency:"UYU",iso:"UY"},{id:95,name:"Venezuela",currency:"VES",iso:"VE"}],e.CountriesObjectBriker=e.reduceByID(e.BrikerCountries),e.CountriesObjectBrikerByName=e.BrikerCountries.reduce((e,r)=>({...e,[r.name]:r})),e.BrikerCurrencies=[{iso:"COP",currency:"Peso Colombiano (COP)"},{iso:"USD",currency:"Dolar Estadounidense (USD)"},{iso:"DOP",currency:"Peso Dominicado (DOP)"},{iso:"MXN",currency:"Peso Mexicano (MXN)"},{iso:"EUR",currency:"EURO (EUR)"}],e.CurrenciesObjectBriker=e.BrikerCurrencies.reduce((e,r)=>({...e,[r.iso]:r})),e.timeOut=r=>new Promise(e=>{setTimeout(e,r||1e3)});const r=((a={}).init=e=>{if("string"==typeof(e=void 0===e?"":e))return a.initBasic(e);if("object"!=typeof e)throw"invalid argument";return"progressbar"===e.type?a.initProgressbar(e):void 0},a.finish=e=>{try{PreLoader_Metrokubiko_text.innerHTML="",PreLoader_Metrokubiko.style.display="none"}catch(e){}try{PreLoader_Metrokubiko_progressBar.style.display="none",PreLoader_Metrokubiko_progressBar_text.innerHTML="",PreLoader_Metrokubiko_progressBar_bar.children[0].style.width="0%"}catch(e){}},a.initBasic=e=>{window.PreLoader_Metrokubiko||a.createPreLoader(),window.PreLoader_Metrokubiko.style.display="block",window.PreLoader_Metrokubiko_text.innerHTML=e},a.createPreLoader=e=>{const r=document.createElement("div");r.id="PreLoader_Metrokubiko",r.style.display="none",r.innerHTML=a.getHTML(),document.body.appendChild(r)},a.initProgressbar=e=>{window.PreLoader_Metrokubiko_progressBar||a.createProgressbar(),window.PreLoader_Metrokubiko_progressBar.style.display="block",window.PreLoader_Metrokubiko_progressBar_text.innerHTML=e.text},a.setProgressbarValue=e=>{const r=window.PreLoader_Metrokubiko_progressBar_bar.children[0];var a=r.style.width;r.style.width=e+"%",r.innerHTML=`
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
`;let n=null;const c=e=>{if(!((e=parseFloat(e))<0||100<e)){const r=n.querySelector(".loader_metrokubiko__progressbar--bar_value");r.style.width=e+"%"}},o=e=>{const r=n.querySelector(".loader_metrokubiko__progressbar--text");r.innerHTML=e},i=({value:e,text:r})=>{o(r),c(e)};var d,t={init:({text:e})=>{if(e=e||"",n)return i({value:0,text:e}),void(n.style.display="");n=document.createElement("div"),n.id="loader_metrokubiko__progressbar",n.innerHTML=`
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
`,document.body.appendChild(n),o(e)},set:i,finish:()=>{n.style.display="none",i({value:0,text:""})},setText:o,setValue:c},u=((d={}).add=(e,r)=>{let a;if(r=r||{},"string"==typeof e)a=document.getElementById(e);else{if("object"!=typeof e||"INPUT"!==e?.tagName&&"input"!==e?.tagName)throw"Not an input";a=e}"percentage"===r.type?d.percentage(a,r):"default"!==r.type&&r.type||d.default(a,r)},d.percentage=(a,n)=>{a.onfocus=e=>{var r=a.value;a.value=d.undoFormatting(r)/100},a.onfocusout=e=>{let r=a.value;isNumber(n.minimum)&&(r=a.value>n.minimum?a.value:n.minimum),a.value=d.format(100*r,n.decimals)+"%"}},d.default=(a,n)=>{a.onfocus=e=>{var r=a.value;a.value=d.undoFormatting(r)},a.onfocusout=e=>{let r=a.value;isNumber(n.minimum)&&(r=a.value>n.minimum?a.value:n.minimum),a.value=d.format(r,n.decimals)}},d.roundOut=(e,r)=>{e=parseFloatEN(e);const a=parseIntEN(r);10<a&&(a=10);r=10**a,r=parseFloat(Math.round(e*r)/r);return parseFloatEN(r)},d.format=(e,r)=>{var a=parseIntEN(r),r=d.roundOut(e,a);const n=String(r);e=r<0,r=e?n.slice(1):n;const c=String(parseIntEN(r)).split("").reverse(),o=c.map((e,r)=>(r+1)%3==0&&c.length-1!==r&&0!==r?","+e:e);r=o.reverse().join(""),r=e?"-"+r:r;if(0===a)return r;let i=-1<n.indexOf(".")?n.slice(n.indexOf(".")+1):"";if(i.length<a){var t=a-i.length;for(let e=1;e<=t;e++)i+="0"}return r+"."+i},d.undoFormatting=e=>{e=e.split("").filter(e=>","!==e&&"%"!==e).join("");return parseFloatEN(e)},d);const s={};const m=(e,r)=>{l.set(r),window.location.hash=e};window.onpopstate=()=>{y()},history.onpushstate=e=>{y()};const l=function(){let r=null;return{get:()=>{var e=JSON.parse(JSON.stringify(r||""));return r=null,e||null},set:e=>{r=e}}}(),y=()=>{const e=window.location.hash.slice(1),r=s.pages[e];if(r){for(const e in s.pages)s.pages[e].frame&&(s.pages[e].frame.style.display="none");if(r.exists)return r.frame.style.display="",void r.onShow(r,l.get());r.exists=!0,r.frame=_(r),s.currentPage=r,r.onInit(r,l.get())}else m(s.defaultPath)},_=e=>{const r=document.createElement("div");return r.classList.add("pathController--frame"),r.setAttribute("pathController--path",e.path),s.parentElement.appendChild(r),r};var p={init:async e=>{var{pages:r,defaultPath:a,parentElement:e}=(e=>{const{pages:r,defaultPath:a,parentElement:n}=e=e||{};for(const c in r)r[c].path=c;return{pages:r||{},defaultPath:a||"",parentElement:n instanceof HTMLElement?n:document.body}})(e);s.pages=r,s.defaultPath=a,s.parentElement=e;const n=window.history,c=n.pushState;n.pushState=function(e){return n.onpushstate(),c.apply(n,arguments)},y()},show:m,getCurrentPage:()=>s.currentPage};return window.searchString=(e,r)=>!(!e||!r)&&-1<e.indexOf(r),window.searchInStringNonStrict=(e,r)=>!(!e||!r)&&(e=e.toLocaleLowerCase(),r=r.toLocaleLowerCase(),-1<e.indexOf(r)),window.isNumber=e=>!isNaN(e),window.isObject=e=>"object"==typeof e,window.isFunction=e=>"function"==typeof e,window.parseIntEN=e=>parseInt(e)?parseInt(e):0,window.parseFloatEN=e=>parseFloat(e)?parseFloat(e):0,window.parseFloatENull=e=>parseFloat(e)?parseFloat(e):null,window.parseFloatEOne=e=>parseFloatEN(e)?parseFloatEN(e):1,window.parseStringEN=e=>e?String(e):"",window.parseDateEN=e=>"object"==typeof e&&(e&&isFunction(e.getTime))?e:null,window.roundedNumber=(e,r)=>{e=parseFloatEN(e);r=10**(r=10<(r=parseIntEN(r))?10:r),r=parseFloat(Math.round(e*r)/r);return parseFloatEN(r)},{...e,PreLoader:r,ProgressBar:t,InputFormatter:u,pathController:p}}();
