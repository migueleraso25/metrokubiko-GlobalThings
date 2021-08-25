 /*


	import { createEvent } from '../GlobalThings/eventsController/main.js';

	const event = createEvent('event_ID'); 

	const removeListener = event.addListener(({ type, data }) => {
		console.log(type);
	});

	event.dispatch({
		type : 'update',
		data : 'Hola Mundo'
	});

	removeListener();

	event.remove();

 */


const events = {};

export const addListener = ({ id_event, callback }) => {

	if (!isFunction(callback)) {
		return false;
	}

	const event = events[id_event];
	const key = GlobalThings.get_UID(10);

	event.listeners[key] = {
		callback,
		remove : () => {
			delete event.listeners[key]
		}
	}

	return event.listeners[key].remove;
};


export const dispatch = ({ id_event, args }) => {

	const event = events[id_event];

	for(const key in event.listeners){
		try {
			event.listeners[key].callback(args);
		}catch(e) {};
	}
};

export const removeEvent = (id_event) => {
	delete events[id_event]
}


export const createEvent = (id_event) => {

	if (events[id_event]) {
		throw 'An event with this id already exists';
	}

	events[id_event] = {
		listeners : {},
		remove : () => removeEvent(id_event),
		dispatch : (args) => dispatch({ id_event, args }),
		addListener : (callback) => addListener({ id_event, callback }),
	}

	return events[id_event];
};



export default {
	dispatch,
	addListener,
	createEvent,
}