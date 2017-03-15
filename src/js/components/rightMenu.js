import { addClass, div } from '../builders';
import { filterByType } from '../helpers';
import menuList from '.menuList';

export default function leftMenu(items = []) {
	const appetizers  = menuList('Appetizers', filterByType(items, 'appetizer'));
	const desserts = menuList('Desserts', filterByType(items, burger));

	return addClass(div(appetizer, burgers), 'column', 'is-6');
}