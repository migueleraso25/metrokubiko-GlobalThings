


const components = {};

export const getComponents = () => {
	return components;
}

export const getComponent = (uid) => {
	return components[uid]
}

export const addComponent = (uid, component) => {
	components[uid] = component;
}

export const setComponent = (uid, component) => {
	// components[uid] = component;
}

export const deleteComponent = (uid) => {
	delete components[uid];
}