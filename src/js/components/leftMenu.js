import { addClass, div } from '../builders';
import { filterByType } from '../helpers';
import menuList from '.menuList';

export default function leftMenu(items = []) {
	const appetizers  = menuList('Soups and Salads', filterByType(items, 'soup_salad'));
	const burgers = menuList('Burgers', filterByType(items, 'dessert'));

	return addClass(div(appetizer, desserts), 'column', 'is-6');
}