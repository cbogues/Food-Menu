export function filterByType(items, type) {
	return items.filter(item => item.type === type);
}
 // format price

 export function formatPrice(price) {
 	return parseFloat(price).toFixed(2);
 }