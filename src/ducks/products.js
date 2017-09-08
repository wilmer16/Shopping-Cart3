export default function products(state = []) {
    return state; 
}

export function getProducts(state, props) {
    return state.products;
}
export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
const getOptionArray = (count) => {
	const array = [];
	for (let i = 0; i <count; i++) {
		array.push(i + 1);
	}

	return array;
}

