export function filterByType(items, type) {
	return items.filter(item => item.type === type);
}
 // format price

 export function formatPrice(Price) {
 	return parseFloat(price).toFixed(2);
 }