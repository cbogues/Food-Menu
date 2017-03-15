import { addClass, addId, div, section } from '../builders';
import leftMenu from './leftMenu';
import rightMenu from './rightMenu';

export default function menu(items =[]) {
	const leftSide = leftMenu(items);
	const rightSide = rightMenu(items);
	const columns  = addClass(section(leftSide, rightSide), 'columns');
	const menuELe = addId(addClass(div(), 'container'), 'menu');

	return menuELe;
}