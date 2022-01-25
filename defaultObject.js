









const GlobalThings = (G => {


	// ...............................................................................................................................................................................
	// Global Variables ..............................................................................................................................................................

			G.countries = [ "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda","Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados","Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana","Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde","Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic","Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark","Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea","Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana","Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong","Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan","Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia","Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar","Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia","Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand","Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru","Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome","Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia","Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden","Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago","Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States","Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe" ];
			G.countriesArray = G.countries.map(pais => ({value : pais, text: pais}));
			// G.countriesData = [
			// 	{ "code": "AFG", "name": "Afghanistan", "currency_name": "Afghanistan Afghani", "currency_code": "AFN" },{ "code": "ALB", "name": "Albania", "currency_name": "Albanian Lek", "currency_code": "ALL" },{ "code": "DZA", "name": "Algeria", "currency_name": "Algerian Dinar", "currency_code": "DZD" },{ "code": "AND", "name": "Andorra", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "AGO", "name": "Angola", "currency_name": "Angolan Kwanza", "currency_code": "AON" },{ "code": "ATG", "name": "Antigua and Barbuda", "currency_name": "Eastern Caribbean Dollar", "currency_code": "XCD" },{ "code": "ARG", "name": "Argentina", "currency_name": "Argentine Peso", "currency_code": "ARS" },{ "code": "ARM", "name": "Armenia", "currency_name": "Dram", "currency_code": "AMD" },{ "code": "AUS", "name": "Australia", "currency_name": "Australian Dollar", "currency_code": "AUD" },{ "code": "AUT", "name": "Austria", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "AZE", "name": "Azerbaijan", "currency_name": "Manat", "currency_code": "AZN" },{ "code": "BHS", "name": "Bahamas", "currency_name": "Bahamian Dollar", "currency_code": "BSD" },{ "code": "BHR", "name": "Bahrain", "currency_name": "Baharaini Dinar", "currency_code": "BHD" },{ "code": "BGD", "name": "Bangladesh", "currency_name": "Taka", "currency_code": "BDT" },{ "code": "BRB", "name": "Barbados", "currency_name": "Barbados Dollar", "currency_code": "BBD" },{ "code": "BLR", "name": "Belarus", "currency_name": "Belarusian Ruble", "currency_code": "BYN" },{ "code": "BEL", "name": "Belgium", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "BLZ", "name": "Belize", "currency_name": "Belize Dollar", "currency_code": "BZD" },{ "code": "BEN", "name": "Benin", "currency_name": "CFA Franc", "currency_code": "XOF" },{ "code": "BTN", "name": "Bhutan", "currency_name": "Ngultrum", "currency_code": "BTN" },{ "code": "BOL", "name": "Bolivia ", "currency_name": "Boliviano", "currency_code": "BOB" },{ "code": "BIH", "name": "Bosnia and Herzegovina", "currency_name": "Convertible Mark", "currency_code": "BAM" },{ "code": "BWA", "name": "Botswana", "currency_name": "Botswana Pula", "currency_code": "BWP" },{ "code": "BRA", "name": "Brazil", "currency_name": "Brazilian Real", "currency_code": "BRL" },{ "code": "BRN", "name": "Brunei Darussalam", "currency_name": "Brunei Dollar", "currency_code": "BND" },{ "code": "BGR", "name": "Bulgaria", "currency_name": "Bulgarian Lev", "currency_code": "BGL" },{ "code": "BFA", "name": "Burkina Faso", "currency_name": "CFA Franc", "currency_code": "XOF" },{ "code": "BDI", "name": "Burundi", "currency_name": "Burundi Franc", "currency_code": "BIF" },{ "code": "CPV", "name": "Cabo Verde Republic of", "currency_name": "Cape Verde Escudo", "currency_code": "CVE" },{ "code": "KHM", "name": "Cambodia", "currency_name": "Riel", "currency_code": "KHR" },{ "code": "CMR", "name": "Cameroon", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "CAN", "name": "Canada", "currency_name": "Canadian Dollar", "currency_code": "CAD" },{ "code": "CAF", "name": "Central African Republic", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "TCD", "name": "Chad", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "CHL", "name": "Chile", "currency_name": "Chilean Peso", "currency_code": "CLP" },{ "code": "CHN", "name": "China", "currency_name": "Yuan Renminbi", "currency_code": "CNY" },{ "code": "COL", "name": "Colombia", "currency_name": "Colombian Peso", "currency_code": "COP" },{ "code": "COM", "name": "Comoros", "currency_name": "Comoros Franc", "currency_code": "KMF" },{ "code": "COG", "name": "Congo", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "COK", "name": "Cook Islands", "currency_name": "New Zealand Dollar", "currency_code": "NZD" },{ "code": "CRI", "name": "Costa Rica", "currency_name": "Costa Rican Colone", "currency_code": "CRC" },{ "code": "CIV", "name": "Côte d'Ivoire", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "HRV", "name": "Croatia", "currency_name": "Kuna", "currency_code": "HRK" },{ "code": "CUB", "name": "Cuba", "currency_name": "Cuban Peso", "currency_code": "CUP" },{ "code": "CYP", "name": "Cyprus", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "CZE", "name": "Czech Republic", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "PRK", "name": "Democratic People's Republic of Korea", "currency_name": "North Korean Won", "currency_code": "KPW" },{ "code": "COD", "name": "Democratic Republic of the Congo", "currency_name": "Congolese Franc", "currency_code": "CDF" },{ "code": "DNK", "name": "Denmark", "currency_name": "Danish Krone", "currency_code": "DKK" },{ "code": "DJI", "name": "Djibouti", "currency_name": "Djibouti Franc", "currency_code": "DJF" },{ "code": "DMA", "name": "Dominica", "currency_name": "Eastern Caribbean Dollar", "currency_code": "XCD" },{ "code": "DOM", "name": "Dominican Republic", "currency_name": "Dominican Peso", "currency_code": "DOP" },{ "code": "ECU", "name": "Ecuador", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "EGY", "name": "Egypt", "currency_name": "Egyptian Pound", "currency_code": "EGP" },{ "code": "SLV", "name": "El Salvador", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "GNQ", "name": "Equatorial Guinea", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "ERI", "name": "Eritrea", "currency_name": "Nakfa", "currency_code": "ERN" },{ "code": "EST", "name": "Estonia", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "SWZ", "name": "Eswatini", "currency_name": "Lilangeni", "currency_code": "SZL" },{ "code": "ETH", "name": "Ethiopia", "currency_name": "Ethiopian Birr", "currency_code": "ETB" },{ "code": "FJI", "name": "Fiji", "currency_name": "Fiji Dollar", "currency_code": "FJD" },{ "code": "FIN", "name": "Finland", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "FRA", "name": "France", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "GAB", "name": "Gabon", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "GMB", "name": "Gambia", "currency_name": "Gambian Dalasi", "currency_code": "GMD" },{ "code": "GEO", "name": "Georgia", "currency_name": "Lari", "currency_code": "GEL" },{ "code": "DEU", "name": "Germany", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "GHA", "name": "Ghana", "currency_name": "Ghana Cedi", "currency_code": "GHC" },{ "code": "GRC", "name": "Greece", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "GRD", "name": "Grenada", "currency_name": "Eastern Caribbean Dollar", "currency_code": "XCD" },{ "code": "GTM", "name": "Guatemala", "currency_name": "Guatemalan Quetzal", "currency_code": "GTQ" },{ "code": "GIN", "name": "Guinea", "currency_name": "Guinea Franc", "currency_code": "GNF" },{ "code": "GNB", "name": "Guinea‐Bissau", "currency_name": "CFA Franc", "currency_code": "XAF" },{ "code": "GUY", "name": "Guyana", "currency_name": "Guyana Dollar", "currency_code": "GYD" },{ "code": "HTI", "name": "Haiti", "currency_name": "Haitian Gourde", "currency_code": "HTG" },{ "code": "HND", "name": "Honduras", "currency_name": "Honduran Lempira", "currency_code": "HNL" },{ "code": "HUN", "name": "Hungary", "currency_name": "Hungarian Forint", "currency_code": "HUF" },{ "code": "ISL", "name": "Iceland", "currency_name": "Icelandic Krona", "currency_code": "ISK" },{ "code": "IND", "name": "India", "currency_name": "Indian Rupee", "currency_code": "INR" },{ "code": "IDN", "name": "Indonesia", "currency_name": "Indonesian Rupiah", "currency_code": "IDR" },{ "code": "IRN", "name": "Iran", "currency_name": "Iranian Rial", "currency_code": "IRR" },{ "code": "IRQ", "name": "Iraq", "currency_name": "Iraqi Dinar", "currency_code": "IQD" },{ "code": "IRL", "name": "Ireland", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "ISR", "name": "Israel", "currency_name": "New Sheqel", "currency_code": "ILS" },{ "code": "ITA", "name": "Italy", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "JAM", "name": "Jamaica", "currency_name": "Jamaican Dollar", "currency_code": "JMD" },{ "code": "JPN", "name": "Japan", "currency_name": "Japanese Yen", "currency_code": "JPY" },{ "code": "JOR", "name": "Jordan", "currency_name": "Jordanian Dinar", "currency_code": "JOD" },{ "code": "KAZ", "name": "Kazakhstan", "currency_name": "Tenge", "currency_code": "KZT" },{ "code": "KEN", "name": "Kenya", "currency_name": "Kenyan Shilling", "currency_code": "KES" },{ "code": "KIR", "name": "Kiribati", "currency_name": "Australian Dollar", "currency_code": "AUD" },{ "code": "KWT", "name": "Kuwait", "currency_name": "Kuwaiti Dinar", "currency_code": "KWD" },{ "code": "KGZ", "name": "Kyrgyzstan", "currency_name": "Som", "currency_code": "KGS" },{ "code": "LAO", "name": "Lao People's Democratic Republic", "currency_name": "Kip", "currency_code": "LAK" },{ "code": "LVA", "name": "Latvia", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "LBN", "name": "Lebanon", "currency_name": "Lebanese Pound", "currency_code": "LBP" },{ "code": "LSO", "name": "Lesotho", "currency_name": "Lesotho Loti", "currency_code": "LSL" },{ "code": "LBR", "name": "Liberia", "currency_name": "Liberian Dollar", "currency_code": "LRD" },{ "code": "LBY", "name": "Libya", "currency_name": "Libyan Dinar", "currency_code": "LYD" },{ "code": "LTU", "name": "Lithuania", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "LUX", "name": "Luxembourg", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "MDG", "name": "Madagascar", "currency_name": "Malagasy Ariary", "currency_code": "MGA" },{ "code": "MWI", "name": "Malawi", "currency_name": "Malawian Kwacha", "currency_code": "MWK" },{ "code": "MYS", "name": "Malaysia", "currency_name": "Ringgit", "currency_code": "MYR" },{ "code": "MDV", "name": "Maldives", "currency_name": "Rufiyaa", "currency_code": "MVR" },{ "code": "MLI", "name": "Mali", "currency_name": "CFA Franc", "currency_code": "XOF" },{ "code": "MLT", "name": "Malta", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "MHL", "name": "Marshall Islands", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "MRT", "name": "Mauritania", "currency_name": "New Ouguiya", "currency_code": "MRU" },{ "code": "MUS", "name": "Mauritius", "currency_name": "Mauritius Rupee", "currency_code": "MUR" },{ "code": "MEX", "name": "Mexico", "currency_name": "Mexican Peso", "currency_code": "MXN" },{ "code": "FSM", "name": "Micronesia (Federated States of)", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "MCO", "name": "Monaco", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "MNG", "name": "Mongolia", "currency_name": "Tugrik", "currency_code": "MNT" },{ "code": "MNE", "name": "Montenegro", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "MAR", "name": "Morocco", "currency_name": "Moroccan Dirham", "currency_code": "MAD" },{ "code": "MOZ", "name": "Mozambique", "currency_name": "Mozambican Metical", "currency_code": "MZM" },{ "code": "MMR", "name": "Myanmar", "currency_name": "Kyat", "currency_code": "MMK" },{ "code": "NAM", "name": "Namibia", "currency_name": "Namibian Dollar", "currency_code": "NAD" },{ "code": "NRU", "name": "Nauru", "currency_name": "Australian Dollar", "currency_code": "AUD" },{ "code": "NPL", "name": "Nepal", "currency_name": "Nepalese Rupee", "currency_code": "NPR" },{ "code": "NLD", "name": "Netherlands", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "NZL", "name": "New Zealand", "currency_name": "New Zealand Dollar", "currency_code": "NZD" },{ "code": "NIC", "name": "Nicaragua", "currency_name": "Nicaraguan Cordoba Oro", "currency_code": "NIO" },{ "code": "NER", "name": "Niger", "currency_name": "CFA Franc", "currency_code": "XOF" },{ "code": "NGA", "name": "Nigeria", "currency_name": "Naira", "currency_code": "NGN" },{ "code": "NIU", "name": "Niue", "currency_name": "New Zealand Dollar", "currency_code": "NZD" },{ "code": "NOR", "name": "Norway", "currency_name": "Norway Krone", "currency_code": "NOK" },{ "code": "OMN", "name": "Oman", "currency_name": "Omani Rial", "currency_code": "OMR" },{ "code": "PAK", "name": "Pakistan", "currency_name": "Pakistani Rupee", "currency_code": "PKR" },{ "code": "PLW", "name": "Palau", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "PAN", "name": "Panama", "currency_name": "Balboa", "currency_code": "PAB" },{ "code": "PNG", "name": "Papua New Guinea", "currency_name": "Kina", "currency_code": "PGK" },{ "code": "PRY", "name": "Paraguay", "currency_name": "Guarani", "currency_code": "PYG" },{ "code": "PER", "name": "Peru", "currency_name": "Nuevo Sol", "currency_code": "PEN" },{ "code": "PHL", "name": "Philippines", "currency_name": "Philippines Peso", "currency_code": "PHP" },{ "code": "POL", "name": "Poland", "currency_name": "Zloty", "currency_code": "PLN" },{ "code": "PRT", "name": "Portugal", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "QAT", "name": "Qatar", "currency_name": "Qatar Rial", "currency_code": "QAR" },{ "code": "KOR", "name": "Republic of Korea", "currency_name": "Won", "currency_code": "KRW" },{ "code": "MDA", "name": "Republic of Moldova", "currency_name": "Moldova Leu", "currency_code": "MDL" },{ "code": "ROU", "name": "Romania", "currency_name": "Romania Leu", "currency_code": "RON" },{ "code": "RUS", "name": "Russian Federation", "currency_name": "Rouble", "currency_code": "RUB" },{ "code": "RWA", "name": "Rwanda", "currency_name": "Rwandan Franc", "currency_code": "RWF" },{ "code": "KNA", "name": "Saint Kitts and Nevis", "currency_name": "Eastern Caribbean Dollar", "currency_code": "XCD" },{ "code": "LCA", "name": "Saint Lucia", "currency_name": "Eastern Caribbean Dollar", "currency_code": "XCD" },{ "code": "VCT", "name": "Saint Vincent and the Grenadines", "currency_name": "Eastern Caribbean Dollar", "currency_code": "XCD" },{ "code": "WSM", "name": "Samoa", "currency_name": "Tala", "currency_code": "WST" },{ "code": "SMR", "name": "San Marino", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "STP", "name": "Sao Tome and Principe", "currency_name": "New Dobra", "currency_code": "STN" },{ "code": "SAU", "name": "Saudi Arabia", "currency_name": "Saudi Riyal", "currency_code": "SAR" },{ "code": "SEN", "name": "Senegal", "currency_name": "CFA Franc", "currency_code": "XOF" },{ "code": "SRB", "name": "Serbia", "currency_name": "Serbian Dinar", "currency_code": "RSD" },{ "code": "SYC", "name": "Seychelles", "currency_name": "Seychelles Rupee", "currency_code": "SCR" },{ "code": "SLE", "name": "Sierra Leone", "currency_name": "Leone", "currency_code": "SLL" },{ "code": "SGP", "name": "Singapore", "currency_name": "Singapore Dollar", "currency_code": "SGD" },{ "code": "SVK", "name": "Slovakia", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "SVN", "name": "Slovenia", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "SLB", "name": "Solomon Islands", "currency_name": "Solomon Dollar", "currency_code": "SBD" },{ "code": "SOM", "name": "Somalia", "currency_name": "Somalian Shilling", "currency_code": "SOS" },{ "code": "ZAF", "name": "South Africa", "currency_name": "Rand", "currency_code": "ZAR" },{ "code": "SSD", "name": "South Sudan", "currency_name": "South Sudanese Pound", "currency_code": "SSP" },{ "code": "ESP", "name": "Spain", "currency_name": "Euro", "currency_code": "EUR" },{ "code": "LKA", "name": "Sri Lanka", "currency_name": "Sri Lanka Rupee", "currency_code": "LKR" },{ "code": "SDN", "name": "Sudan", "currency_name": "Sudanese Pound", "currency_code": "SDG" },{ "code": "SUR", "name": "Suriname", "currency_name": "Surinamese Dollar", "currency_code": "SRD" },{ "code": "SWE", "name": "Sweden", "currency_name": "Swedish Krona", "currency_code": "SEK" },{ "code": "CHE", "name": "Switzerland", "currency_name": "Swiss Franc", "currency_code": "CHF" },{ "code": "SYR", "name": "Syria", "currency_name": "Syrian Pound", "currency_code": "SYP" },{ "code": "TJK", "name": "Tajikistan", "currency_name": "Somoni", "currency_code": "TJS" },{ "code": "THA", "name": "Thailand", "currency_name": "Bhat", "currency_code": "THB" },{ "code": "MKD", "name": "The Republic of North Macedonia", "currency_name": "Denar", "currency_code": "MKD" },{ "code": "TLS", "name": "Timor‐Leste", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "TGO", "name": "Togo", "currency_name": "CFA Franc", "currency_code": "XOF" },{ "code": "TON", "name": "Tonga", "currency_name": "Pa'anga", "currency_code": "TOP" },{ "code": "TTO", "name": "Trinidad and Tobago", "currency_name": "Trinidad and Tobago Dollar", "currency_code": "TTD" },{ "code": "TUN", "name": "Tunisia", "currency_name": "Tunisian Dinar", "currency_code": "TND" },{ "code": "TUR", "name": "Turkey", "currency_name": "Turkish Lira", "currency_code": "TRY" },{ "code": "TKM", "name": "Turkmenistan", "currency_name": "New Manat", "currency_code": "TMT" },{ "code": "TUV", "name": "Tuvalu", "currency_name": "Australian Dollar", "currency_code": "AUD" },{ "code": "UGA", "name": "Uganda", "currency_name": "Ugandan shilling", "currency_code": "UGS" },{ "code": "UKR", "name": "Ukraine", "currency_name": "Hryvnia", "currency_code": "UAH" },{ "code": "ARE", "name": "United Arab Emirates", "currency_name": "U.A.Emirates Dirham", "currency_code": "AED" },{ "code": "GBR", "name": "United Kingdom", "currency_name": "Pound Sterling", "currency_code": "GBP" },{ "code": "TZA", "name": "United Republic of Tanzania", "currency_name": "Tanzanian Shilling", "currency_code": "TZS" },{ "code": "USA", "name": "United States of America", "currency_name": "US Dollar", "currency_code": "USD" },{ "code": "URY", "name": "Uruguay", "currency_name": "Uruguayan Peso", "currency_code": "UYU" },{ "code": "UZB", "name": "Uzbekistan", "currency_name": "Sum", "currency_code": "UZS" },{ "code": "VUT", "name": "Vanuatu", "currency_name": "Vatu", "currency_code": "VUV" },{ "code": "VEN", "name": "Venezuela (Bolivarian Republic of)", "currency_name": "Bolivar Fuerte", "currency_code": "VEF" },{ "code": "VNM", "name": "Viet Nam", "currency_name": "Dong", "currency_code": "VND" },{ "code": "YEM", "name": "Yemen", "currency_name": "Yemeni Rial", "currency_code": "YER" },{ "code": "ZMB", "name": "Zambia", "currency_name": "Kwacha", "currency_code": "ZMK" },{ "code": "ZWE", "name": "Zimbabwe", "currency_name": "US Dollar", "currency_code": "ZWD"}
			// ]

			G.countriesData = [
				{"code": "AFG","name": "Afghanistan","currency_name": "Afghanistan Afghani","currency_code": "AFN"},{"code": "ALB","name": "Albania","currency_name": "Albanian Lek","currency_code": "ALL"},{"code": "DZA","name": "Algeria","currency_name": "Algerian Dinar","currency_code": "DZD"},{"code": "AND","name": "Andorra","currency_name": "Euro","currency_code": "EUR"},{"code": "AGO","name": "Angola","currency_name": "Angolan Kwanza","currency_code": "AON"},{"code": "ATG","name": "Antigua and Barbuda","currency_name": "Eastern Caribbean Dollar","currency_code": "XCD"},{"code": "ARG","name": "Argentina","currency_name": "Argentine Peso","currency_code": "ARS"},{"code": "ARM","name": "Armenia","currency_name": "Dram","currency_code": "AMD"},{"code": "AUS","name": "Australia","currency_name": "Australian Dollar","currency_code": "AUD"},{"code": "AUT","name": "Austria","currency_name": "Euro","currency_code": "EUR"},{"code": "AZE","name": "Azerbaijan","currency_name": "Manat","currency_code": "AZN"},{"code": "BHS","name": "Bahamas","currency_name": "Bahamian Dollar","currency_code": "BSD"},{"code": "BHR","name": "Bahrain","currency_name": "Baharaini Dinar","currency_code": "BHD"},{"code": "BGD","name": "Bangladesh","currency_name": "Taka","currency_code": "BDT"},{"code": "BRB","name": "Barbados","currency_name": "Barbados Dollar","currency_code": "BBD"},{"code": "BLR","name": "Belarus","currency_name": "Belarusian Ruble","currency_code": "BYN"},{"code": "BEL","name": "Belgium","currency_name": "Euro","currency_code": "EUR"},{"code": "BLZ","name": "Belize","currency_name": "Belize Dollar","currency_code": "BZD"},{"code": "BEN","name": "Benin","currency_name": "CFA Franc","currency_code": "XOF"},{"code": "BTN","name": "Bermuda","currency_name": "Ngultrum","currency_code": "BTN"},{"code": "BOL","name": "Bhutan","currency_name": "Boliviano","currency_code": "BOB"},{"code": "BIH","name": "Bolivia","currency_name": "Convertible Mark","currency_code": "BAM"},{"code": "BWA","name": "Bosnia and Herzegovina","currency_name": "Botswana Pula","currency_code": "BWP"},{"code": "BRA","name": "Botswana","currency_name": "Brazilian Real","currency_code": "BRL"},{"code": "BRN","name": "Brazil","currency_name": "Brunei Dollar","currency_code": "BND"},{"code": "BGR","name": "Brunei","currency_name": "Bulgarian Lev","currency_code": "BGL"},{"code": "BFA","name": "Bulgaria","currency_name": "CFA Franc","currency_code": "XOF"},{"code": "BDI","name": "Burkina Faso","currency_name": "Burundi Franc","currency_code": "BIF"},{"code": "CPV","name": "Burma","currency_name": "Cape Verde Escudo","currency_code": "CVE"},{"code": "KHM","name": "Burundi","currency_name": "Riel","currency_code": "KHR"},{"code": "CMR","name": "Cambodia","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "CAN","name": "Cameroon","currency_name": "Canadian Dollar","currency_code": "CAD"},{"code": "CAF","name": "Canada","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "TCD","name": "Cape Verde","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "CHL","name": "Central African Republic","currency_name": "Chilean Peso","currency_code": "CLP"},{"code": "CHN","name": "Chad","currency_name": "Yuan Renminbi","currency_code": "CNY"},{"code": "COL","name": "Chile","currency_name": "Colombian Peso","currency_code": "COP"},{"code": "COM","name": "China","currency_name": "Comoros Franc","currency_code": "KMF"},{"code": "COG","name": "Colombia","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "COK","name": "Comoros","currency_name": "New Zealand Dollar","currency_code": "NZD"},{"code": "CRI","name": "Congo, Democratic Republic","currency_name": "Costa Rican Colone","currency_code": "CRC"},{"code": "CIV","name": "Congo, Republic of the","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "HRV","name": "Costa Rica","currency_name": "Kuna","currency_code": "HRK"},{"code": "CUB","name": "Cote d'Ivoire","currency_name": "Cuban Peso","currency_code": "CUP"},{"code": "CYP","name": "Croatia","currency_name": "Euro","currency_code": "EUR"},{"code": "CZE","name": "Cuba","currency_name": "Euro","currency_code": "EUR"},{"code": "PRK","name": "Cyprus","currency_name": "North Korean Won","currency_code": "KPW"},{"code": "COD","name": "Czech Republic","currency_name": "Congolese Franc","currency_code": "CDF"},{"code": "DNK","name": "Denmark","currency_name": "Danish Krone","currency_code": "DKK"},{"code": "DJI","name": "Djibouti","currency_name": "Djibouti Franc","currency_code": "DJF"},{"code": "DMA","name": "Dominica","currency_name": "Eastern Caribbean Dollar","currency_code": "XCD"},{"code": "DOM","name": "Dominican Republic","currency_name": "Dominican Peso","currency_code": "DOP"},{"code": "ECU","name": "East Timor","currency_name": "US Dollar","currency_code": "USD"},{"code": "EGY","name": "Ecuador","currency_name": "Egyptian Pound","currency_code": "EGP"},{"code": "SLV","name": "Egypt","currency_name": "US Dollar","currency_code": "USD"},{"code": "GNQ","name": "El Salvador","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "ERI","name": "Equatorial Guinea","currency_name": "Nakfa","currency_code": "ERN"},{"code": "EST","name": "Eritrea","currency_name": "Euro","currency_code": "EUR"},{"code": "SWZ","name": "Estonia","currency_name": "Lilangeni","currency_code": "SZL"},{"code": "ETH","name": "Ethiopia","currency_name": "Ethiopian Birr","currency_code": "ETB"},{"code": "FJI","name": "Fiji","currency_name": "Fiji Dollar","currency_code": "FJD"},{"code": "FIN","name": "Finland","currency_name": "Euro","currency_code": "EUR"},{"code": "FRA","name": "France","currency_name": "Euro","currency_code": "EUR"},{"code": "GAB","name": "Gabon","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "GMB","name": "Gambia","currency_name": "Gambian Dalasi","currency_code": "GMD"},{"code": "GEO","name": "Georgia","currency_name": "Lari","currency_code": "GEL"},{"code": "DEU","name": "Germany","currency_name": "Euro","currency_code": "EUR"},{"code": "GHA","name": "Ghana","currency_name": "Ghana Cedi","currency_code": "GHC"},{"code": "GRC","name": "Greece","currency_name": "Euro","currency_code": "EUR"},{"code": "GRD","name": "Greenland","currency_name": "Eastern Caribbean Dollar","currency_code": "XCD"},{"code": "GTM","name": "Grenada","currency_name": "Guatemalan Quetzal","currency_code": "GTQ"},{"code": "GIN","name": "Guatemala","currency_name": "Guinea Franc","currency_code": "GNF"},{"code": "GNB","name": "Guinea","currency_name": "CFA Franc","currency_code": "XAF"},{"code": "GUY","name": "Guinea-Bissau","currency_name": "Guyana Dollar","currency_code": "GYD"},{"code": "HTI","name": "Guyana","currency_name": "Haitian Gourde","currency_code": "HTG"},{"code": "HND","name": "Haiti","currency_name": "Honduran Lempira","currency_code": "HNL"},{"code": "HUN","name": "Honduras","currency_name": "Hungarian Forint","currency_code": "HUF"},{"code": "ISL","name": "Hong Kong","currency_name": "Icelandic Krona","currency_code": "ISK"},{"code": "IND","name": "Hungary","currency_name": "Indian Rupee","currency_code": "INR"},{"code": "IDN","name": "Iceland","currency_name": "Indonesian Rupiah","currency_code": "IDR"},{"code": "IRN","name": "India","currency_name": "Iranian Rial","currency_code": "IRR"},{"code": "IRQ","name": "Indonesia","currency_name": "Iraqi Dinar","currency_code": "IQD"},{"code": "IRL","name": "Iran","currency_name": "Euro","currency_code": "EUR"},{"code": "ISR","name": "Iraq","currency_name": "New Sheqel","currency_code": "ILS"},{"code": "ITA","name": "Ireland","currency_name": "Euro","currency_code": "EUR"},{"code": "JAM","name": "Israel","currency_name": "Jamaican Dollar","currency_code": "JMD"},{"code": "JPN","name": "Italy","currency_name": "Japanese Yen","currency_code": "JPY"},{"code": "JOR","name": "Jamaica","currency_name": "Jordanian Dinar","currency_code": "JOD"},{"code": "KAZ","name": "Japan","currency_name": "Tenge","currency_code": "KZT"},{"code": "KEN","name": "Jordan","currency_name": "Kenyan Shilling","currency_code": "KES"},{"code": "KIR","name": "Kazakhstan","currency_name": "Australian Dollar","currency_code": "AUD"},{"code": "KWT","name": "Kenya","currency_name": "Kuwaiti Dinar","currency_code": "KWD"},{"code": "KGZ","name": "Kiribati","currency_name": "Som","currency_code": "KGS"},{"code": "LAO","name": "Korea, North","currency_name": "Kip","currency_code": "LAK"},{"code": "LVA","name": "Korea, South","currency_name": "Euro","currency_code": "EUR"},{"code": "LBN","name": "Kuwait","currency_name": "Lebanese Pound","currency_code": "LBP"},{"code": "LSO","name": "Kyrgyzstan","currency_name": "Lesotho Loti","currency_code": "LSL"},{"code": "LBR","name": "Laos","currency_name": "Liberian Dollar","currency_code": "LRD"},{"code": "LBY","name": "Latvia","currency_name": "Libyan Dinar","currency_code": "LYD"},{"code": "LTU","name": "Lebanon","currency_name": "Euro","currency_code": "EUR"},{"code": "LUX","name": "Lesotho","currency_name": "Euro","currency_code": "EUR"},{"code": "MDG","name": "Liberia","currency_name": "Malagasy Ariary","currency_code": "MGA"},{"code": "MWI","name": "Libya","currency_name": "Malawian Kwacha","currency_code": "MWK"},{"code": "MYS","name": "Liechtenstein","currency_name": "Ringgit","currency_code": "MYR"},{"code": "MDV","name": "Lithuania","currency_name": "Rufiyaa","currency_code": "MVR"},{"code": "MLI","name": "Luxembourg","currency_name": "CFA Franc","currency_code": "XOF"},{"code": "MLT","name": "Macedonia","currency_name": "Euro","currency_code": "EUR"},{"code": "MHL","name": "Madagascar","currency_name": "US Dollar","currency_code": "USD"},{"code": "MRT","name": "Malawi","currency_name": "New Ouguiya","currency_code": "MRU"},{"code": "MUS","name": "Malaysia","currency_name": "Mauritius Rupee","currency_code": "MUR"},{"code": "MEX","name": "Maldives","currency_name": "Mexican Peso","currency_code": "MXN"},{"code": "FSM","name": "Mali","currency_name": "US Dollar","currency_code": "USD"},{"code": "MCO","name": "Malta","currency_name": "Euro","currency_code": "EUR"},{"code": "MNG","name": "Marshall Islands","currency_name": "Tugrik","currency_code": "MNT"},{"code": "MNE","name": "Mauritania","currency_name": "Euro","currency_code": "EUR"},{"code": "MAR","name": "Mauritius","currency_name": "Moroccan Dirham","currency_code": "MAD"},{"code": "MOZ","name": "Mexico","currency_name": "Mozambican Metical","currency_code": "MZM"},{"code": "MMR","name": "Micronesia","currency_name": "Kyat","currency_code": "MMK"},{"code": "NAM","name": "Moldova","currency_name": "Namibian Dollar","currency_code": "NAD"},{"code": "NRU","name": "Mongolia","currency_name": "Australian Dollar","currency_code": "AUD"},{"code": "NPL","name": "Morocco","currency_name": "Nepalese Rupee","currency_code": "NPR"},{"code": "NLD","name": "Monaco","currency_name": "Euro","currency_code": "EUR"},{"code": "NZL","name": "Mozambique","currency_name": "New Zealand Dollar","currency_code": "NZD"},{"code": "NIC","name": "Namibia","currency_name": "Nicaraguan Cordoba Oro","currency_code": "NIO"},{"code": "NER","name": "Nauru","currency_name": "CFA Franc","currency_code": "XOF"},{"code": "NGA","name": "Nepal","currency_name": "Naira","currency_code": "NGN"},{"code": "NIU","name": "Netherlands","currency_name": "New Zealand Dollar","currency_code": "NZD"},{"code": "NOR","name": "New Zealand","currency_name": "Norway Krone","currency_code": "NOK"},{"code": "OMN","name": "Nicaragua","currency_name": "Omani Rial","currency_code": "OMR"},{"code": "PAK","name": "Niger","currency_name": "Pakistani Rupee","currency_code": "PKR"},{"code": "PLW","name": "Nigeria","currency_name": "US Dollar","currency_code": "USD"},{"code": "PAN","name": "Norway","currency_name": "Balboa","currency_code": "PAB"},{"code": "PNG","name": "Oman","currency_name": "Kina","currency_code": "PGK"},{"code": "PRY","name": "Pakistan","currency_name": "Guarani","currency_code": "PYG"},{"code": "PER","name": "Panama","currency_name": "Nuevo Sol","currency_code": "PEN"},{"code": "PHL","name": "Papua New Guinea","currency_name": "Philippines Peso","currency_code": "PHP"},{"code": "POL","name": "Paraguay","currency_name": "Zloty","currency_code": "PLN"},{"code": "PRT","name": "Peru","currency_name": "Euro","currency_code": "EUR"},{"code": "QAT","name": "Philippines","currency_name": "Qatar Rial","currency_code": "QAR"},{"code": "KOR","name": "Poland","currency_name": "Won","currency_code": "KRW"},{"code": "MDA","name": "Portugal","currency_name": "Moldova Leu","currency_code": "MDL"},{"code": "ROU","name": "Qatar","currency_name": "Romania Leu","currency_code": "RON"},{"code": "RUS","name": "Romania","currency_name": "Rouble","currency_code": "RUB"},{"code": "RWA","name": "Russia","currency_name": "Rwandan Franc","currency_code": "RWF"},{"code": "KNA","name": "Rwanda","currency_name": "Eastern Caribbean Dollar","currency_code": "XCD"},{"code": "LCA","name": "Samoa","currency_name": "Eastern Caribbean Dollar","currency_code": "XCD"},{"code": "VCT","name": "San Marino","currency_name": "Eastern Caribbean Dollar","currency_code": "XCD"},{"code": "WSM","name": " Sao Tome","currency_name": "Tala","currency_code": "WST"},{"code": "SMR","name": "Saudi Arabia","currency_name": "Euro","currency_code": "EUR"},{"code": "STP","name": "Senegal","currency_name": "New Dobra","currency_code": "STN"},{"code": "SAU","name": "Serbia and Montenegro","currency_name": "Saudi Riyal","currency_code": "SAR"},{"code": "SEN","name": "Seychelles","currency_name": "CFA Franc","currency_code": "XOF"},{"code": "SRB","name": "Sierra Leone","currency_name": "Serbian Dinar","currency_code": "RSD"},{"code": "SYC","name": "Singapore","currency_name": "Seychelles Rupee","currency_code": "SCR"},{"code": "SLE","name": "Slovakia","currency_name": "Leone","currency_code": "SLL"},{"code": "SGP","name": "Slovenia","currency_name": "Singapore Dollar","currency_code": "SGD"},{"code": "SVK","name": "Solomon Islands","currency_name": "Euro","currency_code": "EUR"},{"code": "SVN","name": "Somalia","currency_name": "Euro","currency_code": "EUR"},{"code": "SLB","name": "South Africa","currency_name": "Solomon Dollar","currency_code": "SBD"},{"code": "SOM","name": "Spain","currency_name": "Somalian Shilling","currency_code": "SOS"},{"code": "ZAF","name": "Sri Lanka","currency_name": "Rand","currency_code": "ZAR"},{"code": "SSD","name": "Sudan","currency_name": "South Sudanese Pound","currency_code": "SSP"},{"code": "ESP","name": "Suriname","currency_name": "Euro","currency_code": "EUR"},{"code": "LKA","name": "Swaziland","currency_name": "Sri Lanka Rupee","currency_code": "LKR"},{"code": "SDN","name": "Sweden","currency_name": "Sudanese Pound","currency_code": "SDG"},{"code": "SUR","name": "Switzerland","currency_name": "Surinamese Dollar","currency_code": "SRD"},{"code": "SWE","name": "Syria","currency_name": "Swedish Krona","currency_code": "SEK"},{"code": "CHE","name": "Taiwan","currency_name": "Swiss Franc","currency_code": "CHF"},{"code": "SYR","name": "Tajikistan","currency_name": "Syrian Pound","currency_code": "SYP"},{"code": "TJK","name": "Tanzania","currency_name": "Somoni","currency_code": "TJS"},{"code": "THA","name": "Thailand","currency_name": "Bhat","currency_code": "THB"},{"code": "MKD","name": "Togo","currency_name": "Denar","currency_code": "MKD"},{"code": "TLS","name": "Tonga","currency_name": "US Dollar","currency_code": "USD"},{"code": "TGO","name": "Trinidad and Tobago","currency_name": "CFA Franc","currency_code": "XOF"},{"code": "TON","name": "Tunisia","currency_name": "Pa'anga","currency_code": "TOP"},{"code": "TTO","name": "Turkey","currency_name": "Trinidad and Tobago Dollar","currency_code": "TTD"},{"code": "TUN","name": "Turkmenistan","currency_name": "Tunisian Dinar","currency_code": "TND"},{"code": "TUR","name": "Uganda","currency_name": "Turkish Lira","currency_code": "TRY"},{"code": "TKM","name": "Ukraine","currency_name": "New Manat","currency_code": "TMT"},{"code": "TUV","name": "United Arab Emirates","currency_name": "Australian Dollar","currency_code": "AUD"},{"code": "UGA","name": "United Kingdom","currency_name": "Ugandan shilling","currency_code": "UGS"},{"code": "UKR","name": "United States","currency_name": "Hryvnia","currency_code": "UAH"},{"code": "ARE","name": "Uruguay","currency_name": "U.A.Emirates Dirham","currency_code": "AED"},{"code": "GBR","name": "Uzbekistan","currency_name": "Pound Sterling","currency_code": "GBP"},{"code": "TZA","name": "Vanuatu","currency_name": "Tanzanian Shilling","currency_code": "TZS"},{"code": "USA","name": "Venezuela","currency_name": "US Dollar","currency_code": "USD"},{"code": "URY","name": "Vietnam","currency_name": "Uruguayan Peso","currency_code": "UYU"},{"code": "UZB","name": "Yemen","currency_name": "Sum","currency_code": "UZS"},{"code": "VUT","name": "Zambia","currency_name": "Vatu","currency_code": "VUV"},{"code": "VEN","name": "Zimbabwe","currency_name": "Bolivar Fuerte","currency_code": "VEF"},{"code": "VNM","currency_name": "Dong","currency_code": "VND"},{"code": "YEM","currency_name": "Yemeni Rial","currency_code": "YER"},{"code": "ZMB","currency_name": "Kwacha","currency_code": "ZMK"},{"code": "ZWE","currency_name": "US Dollar","currency_code": "ZWD"}
			]

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
















