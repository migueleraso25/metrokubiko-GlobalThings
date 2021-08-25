import settings from './settings.js';

const data = {};
let dropdownsComponents = [];


const getProjects = async () => {

	if (data.projects) {
		return data.projects;
	}

	PreLoader.init('Cargando Datos...');

	const collection = await db.collection('cuentas').doc(currentUser.id_cuenta).collection('proyectos').get();
	const projects = GlobalThings.getArrayCollection(collection);

	PreLoader.finish();

	return data.projects = projects;
}


const newSupportTicket = async ({ currentUser }) => {

	const Modal = new Components.Modal(settings.mainModal);

	dropdownsComponents = [];
	data.result = null;
	data.currentUser = currentUser;

	Modal.create();

	await getProjects();

	addDropDowns(Modal);
	addSaveFunction(Modal);

	return new Promise(resolve => {

		Modal.onClose = () => {
			console.log(data)
			resolve(data.result);
		};
	});
};




const addDropDowns = (Modal) => {

	const Inputs = Modal.Body.getElementsByTagName('input');
	const { Dropdown_projects, Dropdown_categories, Dropdown_priority, Dropdown_modules } = settings;


	for(let Input of Inputs){

		if (Input.name === 'NewSupportTicket--Modal--project') {
			const dropdown = new ej.dropdowns.DropDownList({ ...Dropdown_projects, dataSource: data.projects});
			dropdown.appendTo(Input);
			dropdownsComponents.push({ dropdown, key : 'proyecto' });
		}

		if (Input.name === 'NewSupportTicket--Modal--category') {
			const dropdown = new ej.dropdowns.DropDownList(Dropdown_categories);
			dropdown.appendTo(Input);
			dropdownsComponents.push({ dropdown, key : 'categoria' });
		}

		if (Input.name === 'NewSupportTicket--Modal--priority') {
			const dropdown = new ej.dropdowns.DropDownList(Dropdown_priority);
			dropdown.appendTo(Input);
			dropdownsComponents.push({ dropdown, key : 'prioridad' });
		}

		if (Input.name === 'NewSupportTicket--Modal--module') {
			const dropdown = new ej.dropdowns.DropDownList(Dropdown_modules);
			dropdown.appendTo(Input);
			dropdownsComponents.push({ dropdown, key : 'modulo' });
		}
	}
}



const addSaveFunction = (Modal) => {

	const saveElement = Modal.Header.querySelector('.save-button');
	saveElement.onclick = () => save(Modal);
}


const save = async (Modal) => {

	const $subjectInput = Modal.Body.querySelector('[name=NewSupportTicket--Modal--subject]');
	const subject = $subjectInput.value;

	if (!subject) {
		Toast.error('El asunto es requerido.');
		return;
	}

	const ticket = {
		createdAt : new Date(),
		numero_mensajes : 0,
		activo : true,
		proyecto : {},
		asunto : subject,
		id_user_crea : data.currentUser.id,
		id_cuenta : data.currentUser.id_cuenta,
		email_user_crea : data.currentUser.email,
		nombre_user_crea : data.currentUser.nombre,
	};

	dropdownsComponents.forEach(obj => {

		if (obj.key === 'modulo') {
			ticket.proyecto.modulo = obj.dropdown.value;
			return;
		}

		if (obj.key === 'proyecto') {
			ticket.proyecto.id = obj.dropdown.value;
			ticket.proyecto.nombre = obj.dropdown.text;
			return;
		}

		ticket[obj.key] = obj.dropdown.value;
	});

	const sendMessage = await GlobalThings.confirm({
		content : 'Deseas agregar un mensaje al ticket?',
		accept : 'Agregar Mensaje',
		cancel : 'Crear Ticket'
	});

	if (!sendMessage) {
		saveInDataBase({ ticket });
		return;
	}

	const message = await GlobalThings.newMessagePrompt();

	if (!message) return;

	ticket.numero_mensajes = 1;

	saveInDataBase({
		ticket,
		message : {
			anexos : message.annexes || {},
			createdAt : new Date(),
			html : message.text,
			id_user_crea : data.currentUser.id,
			email_user_crea : data.currentUser.nombre,
			nombre_user_crea : data.currentUser.nombre,
		}
	});
}

const saveInDataBase = async ({ ticket, message }) => {

	FirebaseBatch.init();
	PreLoader.init('Guardando datos...');

	const id_ticket = GlobalThings.get_UID(25);
	const refDocTicket = db.doc(`/consola/dashboard/tickets_soporte/${id_ticket}`);

	ticket.codigo = 'CS-' + id_ticket.slice(0, 5);

	FirebaseBatch.add({
		action : 'set',
		actionObject : ticket,
		documentRef : refDocTicket,
	})

	if (message) {
		const id_message = GlobalThings.get_UID(25);
		const refDocMessage = refDocTicket.collection('mensajes').doc(id_message);

		FirebaseBatch.add({
			action : 'set',
			actionObject : message,
			documentRef : refDocMessage,
		})
	}

	await FirebaseBatch.finish();

	data.result = { ...ticket, message };

	PreLoader.finish('Guardando datos...');
	Components.closeModal('NewSupportTicket--Modal');
}



export default newSupportTicket;