// runs only in server

export const load = async (loadEvent) => {
	const { fetch } = loadEvent;

	const title: string = 'List of available product';
	const response = await fetch('http://localhost:4000/products');

	const products = await response.json();

	return { title, products };
};
