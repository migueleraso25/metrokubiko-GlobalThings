export default {
	modalSettings : {
		complete	: true,
		type		: 'Medium',
		id			: 'Modal_Message_Prompt',
		Body		: `
			<div style="height: 100%;"></div>
			<input type="file" style="display: none;" id="Input_newMessagePrompt_add_image" accept="image/png, image/jpeg" >
		`,
	},
	annexesModal : {
		type		: 'Small-06',
		id			: 'Modal_Message_Prompt_annexes',
		Header		: `
			<div class="Title">
				Anexos
			</div>
			<div class="Btn-group">
				<a class="Btn-02 btn-send btn-mkk">Guardar</a>
				<i class="fas fa-times btn-close Btn-02"></i>
			</div>
		`,
		Body		: `
		`,
	},
	rteSettings : {
		value : '',
		height: '100%',
		placeholder: '<i> Mensaje... </i>',
		toolbarSettings: {
			type: 'MultiRow',
			enableFloating: true,
			items: [
				'Bold', 'Italic', 'Underline', 'FontSize', 'FontColor', 'BackgroundColor',
				'|', 
				'Alignments', 'OrderedList', 'UnorderedList',
				'|',
				'Undo', 'Redo',
				'|',
				{
					id : 'agregar_imagen',
					tooltipText : 'Agregar Imagen',
					template: `
						<a class="btn-mkk">
							Agregar Imagen
						</a>
					`
				},
				{
					id : 'agregar_anexos',
					tooltipText : 'Agregar Anexos',
					template: `
						<a class="btn-mkk">
							Agregar Anexos
						</a>
					`
				}
			]
		}
	}
}