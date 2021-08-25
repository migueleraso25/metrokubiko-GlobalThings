async function getMessage() {

	const result = await GlobalThings.newMessagePrompt({

		srcStorage : '', // default 'new_message'

		annexesSettings : {
			size: 2 // default 3
		},

		modalSettings : {
			title : '' // default 'Nuevo Mensaje'
		}
	})

	result // { annexes : [], text : '' };
}