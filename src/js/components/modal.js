import { addClass, addId, button, div, h1, i, p, section, text, ul } from '../builders';
import modalItem from './modalItem';

export default function modal(items = []) {
	const close = addId(addClass(i(), 'fa', 'fa-times', 'close'), 'close');
	const title = addClass(h1(text('Cart')), 'title');

	let cart;
	if (items.length === 0) {
		cart = p(text('Your cart is empty'));
	} else {
		const menuItems = items.map(modalItems);
		cart = addClass(ul(..modalItems), 'menu');
	}

	const cartContainer = addId(div(cart), 'cart-item');

	const checkoutButton = addClass(button(text('Checkout')), 'button', 'is-fullwidth');

	const modalContainer = addClass(div(close, title, cartContainer, checkoutButton), 'modal-container');

	const modalEle = addId(addClass(section(modalContainer), 'modal'), 'modal');

	return modalEle;
	
}