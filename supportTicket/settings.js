export default {

	mainModal : {
		type : 'Medium',
		id : 'NewSupportTicket--Modal',
		Header : `
			<div class="Title" style="width: calc(100% - 200px);">Nuevo Ticket de Soporte</div>
			<div class="Btn-group" style="width: 200px;">
				<span class="Btn-02 save-button"> Crear Ticket </span>
				<span class="fas fa-times Btn-02" onclick="Components.closeModal('NewSupportTicket--Modal');"></span>
			</div>
		`,
		Body : `
			<div class="NewSupportTicket--Modal--cell NewSupportTicket--Modal--cell__subject">
				<label for="NewSupportTicket--Modal--subject"> Asunto: </label>
				<input class="Input-mkk" name="NewSupportTicket--Modal--subject" />
			</div>

			<div class="NewSupportTicket--Modal--cell">
				<label for="NewSupportTicket--Modal--priority"> Prioridad: </label>
				<input class="Input-mkk" name="NewSupportTicket--Modal--priority" />
			</div>

			<div class="NewSupportTicket--Modal--cell">
				<label for="NewSupportTicket--Modal--category"> Categoria: </label>
				<input class="Input-mkk" name="NewSupportTicket--Modal--category" />
			</div>

			<div class="NewSupportTicket--Modal--cell NewSupportTicket--Modal--cell__project_view">
				<label for="NewSupportTicket--Modal--project"> Proyecto: </label>
				<input class="Input-mkk" name="NewSupportTicket--Modal--project" />
			</div>

			<div class="NewSupportTicket--Modal--cell NewSupportTicket--Modal--cell__project_view">
				<label for="NewSupportTicket--Modal--module"> Modulo: </label>
				<input class="Input-mkk" name="NewSupportTicket--Modal--module" />
			</div>
		`,
	},




	Dropdown_projects : {
        index : 0,
		allowFiltering: true,
        fields : { value: 'id', text: 'nombre' },
	},


	Dropdown_categories : {
        index : 1,
        fields : { value: 'text', text: 'text' },
        dataSource : [
        	{ text : 'Mi Cuenta' },
        	{ text : 'Mis Proyectos' },
        	{ text : 'Mis Bases de Datos' },
        ],
        change : () => {

			const Modal = document.getElementById('NewSupportTicket--Modal');
			const cellProjects = Modal.querySelectorAll('.NewSupportTicket--Modal--cell__project_view');
			const value = Modal.querySelector('[name=NewSupportTicket--Modal--category]').value;

			for(let cellElement of cellProjects){
				cellElement.style.display = value === 'Mis Proyectos' ? '' : 'none';
			}
        }
	},


	Dropdown_priority : {
        index : 0,
        fields : { value: 'id', text: 'text' },
        dataSource : [
        	{ id : 1, text : 'Baja' },
        	{ id : 2, text : 'Media' },
        	{ id : 3, text : 'Alta' },
        	{ id : 4, text : 'Urgente' },
        ]
	},


	Dropdown_modules : {
        index : 0,
        fields : { value: 'text', text: 'text' },
        dataSource : [
        	{ text : 'Planeación' },
        	{ text : 'Utilidades' },
        	{ text : 'Mano de Obra' },
        	{ text : 'Almacén' },
        	{ text : 'Control' },
        ]
	},



}