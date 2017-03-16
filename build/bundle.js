(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.span = span;
exports.nav = nav;
exports.section = section;
exports.p = p;
exports.h1 = h1;
exports.article = article;
exports.h3 = h3;
exports.button = button;
exports.img = img;
exports.addId = addId;
exports.addClass = addClass;
function text(words) {
	return document.createTextNode(words);
}

function createElement(type) {
	var newElement = document.createElement(type);

	for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		children[_key - 1] = arguments[_key];
	}

	children.forEach(function (child) {
		return newElement.appendChild(child);
	});
	return newElement;
}

function div() {
	for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		children[_key2] = arguments[_key2];
	}

	return createElement.apply(undefined, ['div'].concat(children));
}

function i() {
	for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		children[_key3] = arguments[_key3];
	}

	return createElement.apply(undefined, ['i'].concat(children));
}

function span() {
	for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		children[_key4] = arguments[_key4];
	}

	return createElement.apply(undefined, ['span'].concat(children));
}

function nav() {
	for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		children[_key5] = arguments[_key5];
	}

	return createElement.apply(undefined, ['nav'].concat(children));
}

function section() {
	for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
		children[_key6] = arguments[_key6];
	}

	return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
	for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
		children[_key7] = arguments[_key7];
	}

	return createElement.apply(undefined, ['p'].concat(children));
}

function h1() {
	for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
		children[_key8] = arguments[_key8];
	}

	return createElement.apply(undefined, ['h1'].concat(children));
}

function article() {
	for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
		children[_key9] = arguments[_key9];
	}

	return createElement.apply(undefined, ['article'].concat(children));
}

function h3() {
	for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
		children[_key10] = arguments[_key10];
	}

	return createElement.apply(undefined, ['h3'].concat(children));
}

function button() {
	for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
		children[_key11] = arguments[_key11];
	}

	return createElement.apply(undefined, ['button'].concat(children));
}

function img(source) {
	var image = createElement('img');
	image.src = source;
	return image;
}

function addId(element, id) {
	var newElement = element.cloneNode(true);
	return Object.assign(newElement, { id: id });
}

function addClass(element) {
	var newElement = element.cloneNode(true);

	for (var _len12 = arguments.length, klasses = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
		klasses[_key12 - 1] = arguments[_key12];
	}

	klasses.forEach(function (klass) {
		return newElement.classList.add(klass);
	});
	return newElement;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = app;

var _builders = require('../builders');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(items) {
	var navbarEle = (0, _navbar2.default)();
	var heroEle = (0, _hero2.default)();
	var menuEle = (0, _menu2.default)(items);
	var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle, heroEle, menuEle), 'app-container');

	return appEle;
}

},{"../builders":1,"./hero":3,"./menu":5,"./navbar":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
  var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
  var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
  var fancyBear = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Bear')), 'hero-text-bold');
  var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Eateries')), 'hero-text-light');

  var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyBear, eateries), 'container');

  var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

  return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
	var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
	var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

	return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":10,"./menuList":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = menu;

var _builders = require('../builders');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menu() {
	var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	var leftSide = (0, _leftMenu2.default)(items);
	var rightSide = (0, _rightMenu2.default)(items);
	var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
	var menuELe = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(columns), 'container'), 'menu');

	return menuELe;
}

},{"../builders":1,"./leftMenu":4,"./rightMenu":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
	var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
	var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
	var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
	var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

	var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

	var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
	item.dataset.key = itemData.id;
	// adds data attribute to the element

	return item;
}

},{"../builders":1,"../helpers":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
	var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var menuItems = items.map(_menuItem2.default);

	var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

	return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
	var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

	var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
	var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
	var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
	var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

	return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
	var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	var soupSalad = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
	var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

	return (0, _builders.addClass)((0, _builders.div)(soupSalad, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":10,"./menuList":7}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterByType = filterByType;
exports.formatPrice = formatPrice;
function filterByType(items, type) {
  return items.filter(function (item) {
    return item.type === type;
  });
}
// format price

function formatPrice(Price) {
  return parseFloat(price).toFixed(2);
}

},{}],11:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body'); // import app from './components/app';


fetch('food.json').then(function (res) {
   return res.json();
}).then(function (resBody) {
   var body = document.querySelector('body');
   body.style.backgroundColor = '#C00C00';
   console.log(resBody);
   // body.insertBefore(app(), body.childNodes[0]);

   body.insertBefore(resBody, document.body.childNodes[0]);
});

},{"./components/app":2}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL25hdmJhci5qcyIsInNyYy9qcy9jb21wb25lbnRzL3JpZ2h0TWVudS5qcyIsInNyYy9qcy9oZWxwZXJzLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBSUEsQyxHQUFBLEM7UUFJQSxJLEdBQUEsSTtRQUlBLEcsR0FBQSxHO1FBSUEsTyxHQUFBLE87UUFJQSxDLEdBQUEsQztRQUlBLEUsR0FBQSxFO1FBSUEsTyxHQUFBLE87UUFJQSxFLEdBQUEsRTtRQUlBLE0sR0FBQSxNO1FBSUEsRyxHQUFBLEc7UUFPQSxLLEdBQUEsSztRQUtBLFEsR0FBQSxRO0FBOURULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDM0IsUUFBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNBOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUNoRCxLQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQW5COztBQURnRCxtQ0FBVixRQUFVO0FBQVYsVUFBVTtBQUFBOztBQUVoRCxVQUFTLE9BQVQsQ0FBaUI7QUFBQSxTQUFTLFdBQVcsV0FBWCxDQUF1QixLQUF2QixDQUFUO0FBQUEsRUFBakI7QUFDQSxRQUFPLFVBQVA7QUFDQTs7QUFFTSxTQUFTLEdB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QTZCLElBQTdCLEVBQW1DO0FBQ3pDLFNBQU8sTUFBTSxNQUFOLENBQWE7QUFBQSxXQUFRLEtBQUssSUFBTCxLQUFjLElBQXRCO0FBQUEsR0FBYixDQUFQO0FBQ0E7QUFDQTs7QUFFTyxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEI7QUFDbEMsU0FBTyxXQUFXLEtBQVgsRUFBa0IsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBUDtBQUNBOzs7OztBQ0pGOzs7Ozs7QUFFQSxJQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWIsQyxDQUxBOzs7QUFPQSxNQUFNLFdBQU4sRUFDSSxJQURKLENBQ1M7QUFBQSxVQUFPLElBQUksSUFBSixFQUFQO0FBQUEsQ0FEVCxFQUVJLElBRkosQ0FFUyxtQkFBVztBQUNmLE9BQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLFFBQUssS0FBTCxDQUFXLGVBQVgsR0FBNkIsU0FBN0I7QUFDSCxXQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7O0FBRUcsUUFBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLFNBQVMsSUFBVCxDQUFjLFVBQWQsQ0FBeUIsQ0FBekIsQ0FBM0I7QUFDRCxDQVRKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xuXHRjb25zdCBpbWFnZSA9ICBjcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1hZ2Uuc3JjID0gc291cmNlO1xuXHRyZXR1cm4gaW1hZ2U7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XG5cdHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5cbiIsImltcG9ydCB7IGRpdiwgYWRkSWQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChpdGVtcykge1xuXHRjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcblx0Y29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcblx0Y29uc3QgbWVudUVsZSA9IG1lbnUoaXRlbXMpO1xuXHRjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlKSwgJ2FwcC1jb250YWluZXInKTtcblx0XG5cdHJldHVybiBhcHBFbGU7XG5cbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBpbWcsIHAsIHNlY3Rpb24sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcbiAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnc3RhdGljL2ZhbmN5YmVhcl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcbiAgY29uc3QgdGhlID0gYWRkQ2xhc3MocCh0ZXh0KCdUaGUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcbiAgY29uc3QgZmFuY3lCZWFyID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBCZWFyJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcbiAgY29uc3QgZWF0ZXJpZXMgPSBhZGRDbGFzcyhwKHRleHQoJ0VhdGVyaWVzJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZSwgZmFuY3lCZWFyLCBlYXRlcmllcyksICdjb250YWluZXInKTtcblxuICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XG5cbiAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlZnRNZW51KGl0ZW1zID0gW10pIHtcblx0Y29uc3QgYXBwZXRpemVycyAgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcblx0Y29uc3QgYnVyZ2VycyA9IG1lbnVMaXN0KCdCdXJnZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYnVyZ2VyJykpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoaXRlbXMgPSBbXSkge1xuXHRjb25zdCBsZWZ0U2lkZSA9IGxlZnRNZW51KGl0ZW1zKTtcblx0Y29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcblx0Y29uc3QgY29sdW1ucyAgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xuXHRjb25zdCBtZW51RUxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KGNvbHVtbnMpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XG5cblx0cmV0dXJuIG1lbnVFTGU7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcblx0Y29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuXHRjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChgJCR7Zm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpfWApKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xuXHRjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XG5cblx0Y29uc3QgbWVkaWFDb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgYWRkVG9DYXJ0KSwgJ21lZGlhLWNvbnRlbnQnKTtcblxuXHRjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XG5cdGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblx0XHQvLyBhZGRzIGRhdGEgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG5cblx0cmV0dXJuIGl0ZW07XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaDEsIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbWVudUl0ZW0gZnJvbSAnLi9tZW51SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMaXN0KGhlYWRsaW5lLCBpdGVtcyA9IFtdKSB7XG5cdGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtZW51SXRlbSk7XG5cblx0Y29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3BhbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xuXHRjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xuXG5cdGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XG5cdGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcblx0Y29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XG5cdGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0JywgJ2NhcnQnKTtcblxuXHRyZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcblx0Y29uc3Qgc291cFNhbGFkID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xuXHRjb25zdCBkZXNzZXJ0cyA9IG1lbnVMaXN0KCdEZXNzZXJ0cycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2Rlc3NlcnQnKSk7XG5cblx0cmV0dXJuIGFkZENsYXNzKGRpdihzb3VwU2FsYWQsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJ5VHlwZShpdGVtcywgdHlwZSkge1xuXHRyZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSB0eXBlKTtcbn1cbiAvLyBmb3JtYXQgcHJpY2VcblxuIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShQcmljZSkge1xuIFx0cmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XG4gfSIsIi8vIGltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5cblxuaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZmV0Y2goJ2Zvb2QuanNvbicpXG4gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgIC50aGVuKHJlc0JvZHkgPT4ge1xuICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQzAwQzAwJztcblx0XHRjb25zb2xlLmxvZyhyZXNCb2R5KTsgXG4gIC8vIGJvZHkuaW5zZXJ0QmVmb3JlKGFwcCgpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xuICAgICBcbiAgICAgYm9keS5pbnNlcnRCZWZvcmUocmVzQm9keSwgZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgIH0pO1xuIl19
