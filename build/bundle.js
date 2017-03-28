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
exports.ul = ul;
exports.li = li;
exports.section = section;
exports.p = p;
exports.h1 = h1;
exports.article = article;
exports.footer = footer;
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

function ul() {
	for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
		children[_key6] = arguments[_key6];
	}

	return createElement.apply(undefined, ['ul'].concat(children));
}

function li() {
	for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
		children[_key7] = arguments[_key7];
	}

	return createElement.apply(undefined, ['li'].concat(children));
}

function section() {
	for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
		children[_key8] = arguments[_key8];
	}

	return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
	for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
		children[_key9] = arguments[_key9];
	}

	return createElement.apply(undefined, ['p'].concat(children));
}

function h1() {
	for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
		children[_key10] = arguments[_key10];
	}

	return createElement.apply(undefined, ['h1'].concat(children));
}

function article() {
	for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
		children[_key11] = arguments[_key11];
	}

	return createElement.apply(undefined, ['article'].concat(children));
}

function footer() {
	for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
		children[_key12] = arguments[_key12];
	}

	return createElement.apply(undefined, ['footer'].concat(children));
}

function h3() {
	for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
		children[_key13] = arguments[_key13];
	}

	return createElement.apply(undefined, ['h3'].concat(children));
}

function button() {
	for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
		children[_key14] = arguments[_key14];
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

	for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
		klasses[_key15 - 1] = arguments[_key15];
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

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(store) {
	var modalEle = (0, _modal2.default)();
	var navbarEle = (0, _navbar2.default)();
	var heroEle = (0, _hero2.default)();
	var menuEle = (0, _menu2.default)(store);
	var bottomEle = (0, _bottom2.default)();
	var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');

	return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
	var name = (0, _builders.p)((0, _builders.text)('Chris Bogues'));
	var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

	var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

	return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
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

},{"../builders":1}],5:[function(require,module,exports){
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

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = menu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menu(store) {
	var menuELe = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

	store.on('SET_ITEMS', function (_ref) {
		var items = _ref.items;

		var leftSide = (0, _leftMenu2.default)(items);
		var rightSide = (0, _rightMenu2.default)(items);
		var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
		(0, _helpers.$)('#menu').children(columns);
	});

	return menuELe;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
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

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
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

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = modal;

var _builders = require('../builders');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal() {
	var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
	var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

	var cart = void 0;
	if (items.length === 0) {
		cart = (0, _builders.p)((0, _builders.text)('Your cart is empty'));
	} else {
		var modalItems = items.map(_modalItem2.default);
		cart = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(modalItems)), 'menu');
	}

	var cartContainer = (0, _builders.addId)((0, _builders.div)(cart), 'cart-items');

	var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

	var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

	var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

	return modalEle;
}

},{"../builders":1,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function modalItem(itemData) {
	var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
	var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
	var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

	var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
	item.dataset.key = itemData.id;

	return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
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

},{"../builders":1}],12:[function(require,module,exports){
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

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.filterByType = filterByType;
exports.formatPrice = formatPrice;
exports.$ = $;
function filterByType(map, type) {
	return Object.keys(map).filter(function (key) {
		return map[key].type === type;
	}).map(function (key) {
		return map[key];
	});
}
// format price

function formatPrice(price) {
	return parseFloat(price).toFixed(2);
}

function $(query) {
	var elements = Array.prototype.slice.call(document.querySelectorAll(query));

	function children(toAdd) {
		elements.forEach(function (ele) {
			while (ele.firstChild) {
				ele.removeChild(ele.firstChild);
			}

			ele.appendChild(toAdd);
		});
	}

	return {
		children: children
	};
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
	switch (event) {
		case 'SET_ITEMS':
			return Object.assign({}, state, {
				items: data.items.reduce(function (total, item) {
					return Object.assign({}, total, _defineProperty({}, item.id, item));
				}, {})
			});
		default:
			return state;
	}
}

var store = (0, _state.createStore)(reducer);
/* for TEST PURPOSES ONLY */
// store.on('FOO', state => {
// 	console.log('in FOO callback');
// 	console.log('state', state);
// });

// store.on('BAR', state => {
// 	console.log('in BAR callback');
// 	console.log('state', state);
// });

// store.on('NOT_REAL', state => {
// 	console.log('in NOT_REAL callback');
// 	console.log('state', state);
// });

// store.trigger('BAR', {
// 	name: 'holly',
// 	job: 'teacher',
// });

// store.trigger('FOO');
// store.trigger('NOT_REAL');


fetch('food.json').then(function (res) {
	return res.json();
}).then(function (resBody) {
	var body = document.querySelector('body');
	// body.insertBefore(app(), body.childNodes[0]);

	body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
	store.trigger('SET_ITEMS', { items: resBody });
});

},{"./components/app":2,"./state":15}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createStore = createStore;
var defaultState = {
	items: {},
	cart: new Set(),
	cartVisible: false
};

function createStore(reducer) {
	var listeners = {};
	var state = Object.assign({}, defaultState);

	function on(event, cb) {
		if (!listeners[event]) {
			listeners[event] = [];
		}

		listeners[event].push(cb);
	}

	function trigger(event) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		state = reducer(state, event, data);

		if (listeners[event]) {
			listeners[event].forEach(function (cb) {
				cb(state);
			});
		}
	}

	return {
		on: on,
		trigger: trigger
	};
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUlBLGEsR0FBQSxhO1FBTUEsRyxHQUFBLEc7UUFJQSxDLEdBQUEsQztRQUlBLEksR0FBQSxJO1FBSUEsRyxHQUFBLEc7UUFJQSxFLEdBQUEsRTtRQUlBLEUsR0FBQSxFO1FBSUEsTyxHQUFBLE87UUFJQSxDLEdBQUEsQztRQUlBLEUsR0FBQSxFO1FBSUEsTyxHQUFBLE87UUFJQSxNLEdBQUEsTTtRQUlBLEUsR0FBQSxFO1FBSUEsTSxHQUFBLE07UUFJQSxHLEdBQUEsRztRQU9BLEssR0FBQSxLO1FBS0EsUSxHQUFBLFE7QUExRVQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUMzQixRQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0E7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQ2hELEtBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRGdELG1DQUFWLFFBQVU7QUFBVixVQUFVO0FBQUE7O0FBRWhELFVBQVMsT0FBVCxDQUFpQjtBQUFBLFNBQVMsV0FBVyxXQUFYLENBQXVCLEtBQXZCLENBQVQ7QUFBQSxFQUFqQjtBQUNBLFFBQU8sVUFBUDtBQUNBOztBQUVNLFNBQVMsR0FBVCxHQUEwQjtBQUFBLG9DQUFWLFFBQVU7QUFBVixVQUFVO0FBQUE7O0FBQ2hDLFFBQU8sZ0NBQWMsS0FBZCxTQUF1QixRQUF2QixFQUFQO0FBQ0E7O0FBRU0sU0FBUyxDQUFULEdBQXdCO0FBQUEsb0NBQVYsUUFBVTtBQUFWLFVBQVU7QUFBQTs7QUFDOUIsUUFBTyxnQ0FBYyxHQUFkLFNBQXFCLFFBQXJCLEVBQVA7QUFDQTs7QUFFTSxTQUFTLElBQVQsR0FBMkI7QUFBQSxvQ0FBVixRQUFVO0FBQVYsVUFBVTtBQUFBOztBQUNqQyxRQUFPLGdDQUFjLE1BQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNBOztBQUVNLFNBQVMsR0FBVCxHQUEwQjtBQUFBLG9DQUFWLFFBQVU7QUFBVixVQUFVO0FBQUE7O0FBQ2hDLFFBQU8sZ0NBQWMsS0FBZCxTQUF1QixRQUF2QixFQUFQO0FBQ0E7O0FBRU0sU0FBUyxFQUFULEdBQXlCO0FBQUEsb0NBQVYsUUFBVTtBQUFWLFVBQVU7QUFBQTs7QUFDL0IsUUFBTyxnQ0FBYyxJQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDQTs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxvQ0FBVixRQUFVO0FBQVYsVUFBVTtBQUFBOztBQUMvQixRQUFPLGdDQUFjLElBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNBOztBQUVNLFNBQVMsT0FBVCxHQUE4QjtBQUFBLG9DQUFWLFFBQVU7QUFBVixVQUFVO0FBQUE7O0FBQ3BDLFFBQU8sZ0NBQWMsU0FBZCxTQUEyQixRQUEzQixFQUFQO0FBQ0E7O0FBRU0sU0FBUyxDQUFULEdBQXdCO0FBQUEsb0NBQVYsUUFBVTtBQUFWLFVBQVU7QUFBQTs7QUFDOUIsUUFBTyxnQ0FBYyxHQUFkLFNBQXFCLFFBQXJCLEVBQVA7QUFDQTs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsVUFBVTtBQUFBOztBQUMvQixRQUFPLGdDQUFjLElBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNBOztBQUVNLFNBQVMsT0FBVCxHQUE4QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixVQUFVO0FBQUE7O0FBQ3BDLFFBQU8sZ0NBQWMsU0FBZCxTQUEyQixRQUEzQixFQUFQO0FBQ0E7O0FBRU0sU0FBUyxNQUFULEdBQTZCO0FBQUEscUNBQVYsUUFBVTtBQUFWLFVBQVU7QUFBQTs7QUFDbkMsUUFBTyxnQ0FBYyxRQUFkLFNBQTBCLFFBQTFCLEVBQVA7QUFDQTs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsVUFBVTtBQUFBOztBQUMvQixRQUFPLGdDQUFjLElBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNBOztBQUVNLFNBQVMsTUFBVCxHQUE2QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixVQUFVO0FBQUE7O0FBQ25DLFFBQU8sZ0NBQWMsUUFBZCxTQUEwQixRQUExQixFQUFQO0FBQ0E7O0FBRU0sU0FBUyxHQUFULENBQWEsTUFBYixFQUFxQjtBQUMzQixLQUFNLFFBQVMsY0FBYyxLQUFkLENBQWY7QUFDQSxPQUFNLEdBQU4sR0FBWSxNQUFaO0FBQ0EsUUFBTyxLQUFQO0FBQ0E7O0FBR00sU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QixFQUF4QixFQUE0QjtBQUNsQyxLQUFNLGFBQWEsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQW5CO0FBQ0EsUUFBTyxPQUFPLE1BQVAsQ0FBYyxVQUFkLEVBQTBCLEVBQUUsTUFBRixFQUExQixDQUFQO0FBQ0E7O0FBRU0sU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQXVDO0FBQzdDLEtBQU0sYUFBYSxRQUFRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbkI7O0FBRDZDLHFDQUFULE9BQVM7QUFBVCxTQUFTO0FBQUE7O0FBRTdDLFNBQVEsT0FBUixDQUFnQjtBQUFBLFNBQVMsV0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLEtBQXpCLENBQVQ7QUFBQSxFQUFoQjtBQUNBLFFBQU8sVUFBUDtBQUNBOzs7Ozs7OztrQkNwRXVCLEc7O0FBVnhCOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUtlLFNBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFDbEMsS0FBTSxXQUFXLHNCQUFqQjtBQUNBLEtBQU0sWUFBWSx1QkFBbEI7QUFDQSxLQUFNLFVBQVUscUJBQWhCO0FBQ0EsS0FBTSxVQUFVLG9CQUFLLEtBQUwsQ0FBaEI7QUFDQSxLQUFNLFlBQVksdUJBQWxCO0FBQ0EsS0FBTSxTQUFTLHFCQUFNLG1CQUFJLFFBQUosRUFBYyxTQUFkLEVBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLEVBQTJDLFNBQTNDLENBQU4sRUFBNkQsZUFBN0QsQ0FBZjs7QUFFQSxRQUFPLE1BQVA7QUFFQTs7Ozs7Ozs7a0JDbEJ1QixNOztBQUZ4Qjs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDaEMsS0FBTSxPQUFPLGlCQUFFLG9CQUFLLGNBQUwsQ0FBRixDQUFiO0FBQ0EsS0FBTSxVQUFVLHdCQUFTLG1CQUFJLElBQUosQ0FBVCxFQUFvQixTQUFwQixFQUErQixhQUEvQixDQUFoQjs7QUFFQSxLQUFNLFlBQVksd0JBQVMsbUJBQUksT0FBSixDQUFULEVBQXVCLFdBQXZCLENBQWxCOztBQUVBLFFBQU8sd0JBQVMsc0JBQU8sU0FBUCxDQUFULEVBQTRCLFFBQTVCLENBQVA7QUFDQTs7Ozs7Ozs7a0JDTnVCLEk7O0FBSHhCOztBQUdlLFNBQVMsSUFBVCxHQUFnQjtBQUM3QixNQUFNLE9BQU8sd0JBQVMsbUJBQUksNEJBQUosQ0FBVCxFQUE0QyxNQUE1QyxDQUFiO0FBQ0EsTUFBTSxNQUFNLHdCQUFTLGlCQUFFLG9CQUFLLEtBQUwsQ0FBRixDQUFULEVBQXlCLGlCQUF6QixDQUFaO0FBQ0EsTUFBTSxZQUFZLHdCQUFTLGlCQUFFLG9CQUFLLFlBQUwsQ0FBRixDQUFULEVBQWdDLGdCQUFoQyxDQUFsQjtBQUNBLE1BQU0sV0FBVyx3QkFBUyxpQkFBRSxvQkFBSyxVQUFMLENBQUYsQ0FBVCxFQUE4QixpQkFBOUIsQ0FBakI7O0FBRUEsTUFBTSxZQUFZLHdCQUFTLG1CQUFJLElBQUosRUFBVSxHQUFWLEVBQWUsU0FBZixFQUEwQixRQUExQixDQUFULEVBQThDLFdBQTlDLENBQWxCOztBQUVBLE1BQU0sY0FBYyx3QkFBUyxtQkFBSSxTQUFKLENBQVQsRUFBeUIsY0FBekIsQ0FBcEI7O0FBRUEsU0FBTyx3QkFBUyx1QkFBUSxXQUFSLENBQVQsRUFBK0IsTUFBL0IsRUFBdUMsUUFBdkMsQ0FBUDtBQUNEOzs7Ozs7OztrQkNWdUIsUTs7QUFKeEI7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVlLFNBQVMsUUFBVCxHQUE4QjtBQUFBLEtBQVosS0FBWSx1RUFBSixFQUFJOztBQUM1QyxLQUFNLGFBQWMsd0JBQVMsWUFBVCxFQUF1QiwyQkFBYSxLQUFiLEVBQW9CLFdBQXBCLENBQXZCLENBQXBCO0FBQ0EsS0FBTSxVQUFVLHdCQUFTLFNBQVQsRUFBb0IsMkJBQWEsS0FBYixFQUFvQixRQUFwQixDQUFwQixDQUFoQjs7QUFFQSxRQUFPLHdCQUFTLG1CQUFJLFVBQUosRUFBZ0IsT0FBaEIsQ0FBVCxFQUFtQyxRQUFuQyxFQUE2QyxNQUE3QyxDQUFQO0FBQ0E7Ozs7Ozs7O2tCQ0p1QixJOztBQUx4Qjs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ25DLEtBQU0sVUFBVSxxQkFBTSx3QkFBUyxvQkFBVCxFQUFnQixXQUFoQixDQUFOLEVBQW9DLE1BQXBDLENBQWhCOztBQUVDLE9BQU0sRUFBTixDQUFTLFdBQVQsRUFBc0IsZ0JBQWU7QUFBQSxNQUFaLEtBQVksUUFBWixLQUFZOztBQUNwQyxNQUFNLFdBQVcsd0JBQVMsS0FBVCxDQUFqQjtBQUNBLE1BQU0sWUFBWSx5QkFBVSxLQUFWLENBQWxCO0FBQ0EsTUFBTSxVQUFXLHdCQUFTLHVCQUFRLFFBQVIsRUFBa0IsU0FBbEIsQ0FBVCxFQUF1QyxTQUF2QyxDQUFqQjtBQUNBLGtCQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLE9BQXBCO0FBQ0EsRUFMRDs7QUFPRCxRQUFPLE9BQVA7QUFDQTs7Ozs7Ozs7a0JDYnVCLFE7O0FBSHhCOztBQUNBOztBQUVlLFNBQVMsUUFBVCxHQUFpQztBQUFBLEtBQWYsUUFBZSx1RUFBSixFQUFJOztBQUMvQyxLQUFNLE9BQU8sd0JBQVMsa0JBQUcsb0JBQUssU0FBUyxJQUFkLENBQUgsQ0FBVCxFQUFrQyxNQUFsQyxDQUFiO0FBQ0EsS0FBTSxRQUFRLHdCQUFTLG9CQUFLLDBCQUFTLDBCQUFZLFNBQVMsS0FBckIsQ0FBVCxDQUFMLENBQVQsRUFBd0QsT0FBeEQsRUFBaUUsaUJBQWpFLENBQWQ7QUFDQSxLQUFNLGNBQWMsd0JBQVMsaUJBQUUsb0JBQUssU0FBUyxXQUFkLENBQUYsQ0FBVCxFQUF3QyxNQUF4QyxDQUFwQjtBQUNBLEtBQU0sWUFBWSx3QkFBUyxzQkFBTyxvQkFBSyxhQUFMLENBQVAsQ0FBVCxFQUFzQyxRQUF0QyxFQUFnRCxpQkFBaEQsRUFBbUUsYUFBbkUsQ0FBbEI7O0FBRUEsS0FBTSxlQUFlLHdCQUFTLG1CQUFJLElBQUosRUFBVSxLQUFWLEVBQWlCLFdBQWpCLEVBQThCLFNBQTlCLENBQVQsRUFBbUQsZUFBbkQsQ0FBckI7O0FBRUEsS0FBTSxPQUFPLHdCQUFTLHVCQUFRLFlBQVIsQ0FBVCxFQUFnQyxPQUFoQyxFQUF5QyxXQUF6QyxDQUFiO0FBQ0EsTUFBSyxPQUFMLENBQWEsR0FBYixHQUFtQixTQUFTLEVBQTVCO0FBQ0M7O0FBRUQsUUFBTyxJQUFQO0FBQ0E7Ozs7Ozs7O2tCQ2J1QixROztBQUh4Qjs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBd0M7QUFBQSxLQUFaLEtBQVksdUVBQUosRUFBSTs7QUFDdEQsS0FBTSxZQUFZLE1BQU0sR0FBTixvQkFBbEI7O0FBRUEsS0FBTSxRQUFRLHdCQUFTLGtCQUFHLG9CQUFLLFFBQUwsQ0FBSCxDQUFULEVBQTZCLE9BQTdCLENBQWQ7O0FBRUEsUUFBTyx3QkFBUyxnQ0FBSSxLQUFKLDRCQUFjLFNBQWQsR0FBVCxFQUFtQyxZQUFuQyxDQUFQO0FBQ0E7Ozs7Ozs7O2tCQ051QixLOztBQUh4Qjs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTLEtBQVQsR0FBMkI7QUFBQSxLQUFaLEtBQVksdUVBQUosRUFBSTs7QUFDekMsS0FBTSxRQUFRLHFCQUFNLHdCQUFTLGtCQUFULEVBQWMsSUFBZCxFQUFvQixVQUFwQixFQUFnQyxPQUFoQyxDQUFOLEVBQWdELE9BQWhELENBQWQ7QUFDQSxLQUFNLFFBQVEsd0JBQVMsa0JBQUcsb0JBQUssTUFBTCxDQUFILENBQVQsRUFBMkIsT0FBM0IsQ0FBZDs7QUFFQSxLQUFJLGFBQUo7QUFDQSxLQUFJLE1BQU0sTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN2QixTQUFPLGlCQUFFLG9CQUFLLG9CQUFMLENBQUYsQ0FBUDtBQUNBLEVBRkQsTUFFTztBQUNOLE1BQU0sYUFBYSxNQUFNLEdBQU4scUJBQW5CO0FBQ0EsU0FBTyx3QkFBUyxpREFBTSxVQUFOLEVBQVQsRUFBNEIsTUFBNUIsQ0FBUDtBQUNBOztBQUVELEtBQU0sZ0JBQWdCLHFCQUFNLG1CQUFJLElBQUosQ0FBTixFQUFpQixZQUFqQixDQUF0Qjs7QUFFQSxLQUFNLGlCQUFpQix3QkFBUyxzQkFBTyxvQkFBSyxVQUFMLENBQVAsQ0FBVCxFQUFtQyxRQUFuQyxFQUE2QyxjQUE3QyxDQUF2Qjs7QUFFQSxLQUFNLGlCQUFpQix3QkFBUyxtQkFBSSxLQUFKLEVBQVcsS0FBWCxFQUFrQixhQUFsQixFQUFpQyxjQUFqQyxDQUFULEVBQTJELGlCQUEzRCxDQUF2Qjs7QUFFQSxLQUFNLFdBQVcscUJBQU0sd0JBQVMsdUJBQVEsY0FBUixDQUFULEVBQWtDLE9BQWxDLENBQU4sRUFBa0QsT0FBbEQsQ0FBakI7O0FBRUEsUUFBTyxRQUFQO0FBRUE7Ozs7Ozs7O2tCQ3RCdUIsUzs7QUFIeEI7O0FBQ0E7O0FBRWUsU0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCO0FBQzNDLEtBQU0sT0FBTyx3QkFBUyxvQkFBSyxvQkFBSyxTQUFTLElBQWQsQ0FBTCxDQUFULEVBQW9DLE1BQXBDLENBQWI7QUFDQSxLQUFNLFFBQVEsd0JBQVMsb0JBQUssb0JBQUssMEJBQVksU0FBUyxLQUFyQixDQUFMLENBQUwsQ0FBVCxFQUFrRCxPQUFsRCxFQUEyRCxpQkFBM0QsQ0FBZDtBQUNBLEtBQU0sZUFBZSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0IsVUFBcEIsRUFBZ0MsUUFBaEMsQ0FBckI7O0FBRUEsS0FBTSxPQUFPLHdCQUFTLGtCQUFHLElBQUgsRUFBUyxLQUFULEVBQWdCLFlBQWhCLENBQVQsRUFBd0MsV0FBeEMsQ0FBYjtBQUNBLE1BQUssT0FBTCxDQUFhLEdBQWIsR0FBbUIsU0FBUyxFQUE1Qjs7QUFFQSxRQUFPLElBQVA7QUFDQTs7Ozs7Ozs7a0JDVnVCLE07O0FBRnhCOztBQUVlLFNBQVMsTUFBVCxHQUFrQjtBQUNoQyxLQUFNLFVBQVUsd0JBQVMsb0JBQVQsRUFBZ0IsYUFBaEIsQ0FBaEI7O0FBRUEsS0FBTSxXQUFXLHFCQUFNLHdCQUFTLGtCQUFULEVBQWMsSUFBZCxFQUFvQixrQkFBcEIsQ0FBTixFQUErQyxXQUEvQyxDQUFqQjtBQUNBLEtBQU0sWUFBWSx3QkFBUyxxQkFBVCxFQUFpQixZQUFqQixDQUFsQjtBQUNBLEtBQU0sYUFBYSx3QkFBUyxtQkFBSSxRQUFKLEVBQWMsU0FBZCxDQUFULEVBQW1DLGFBQW5DLENBQW5CO0FBQ0EsS0FBTSxXQUFXLHdCQUFTLG1CQUFJLFVBQUosQ0FBVCxFQUEwQixjQUExQixFQUEwQyxNQUExQyxDQUFqQjs7QUFFQSxRQUFPLHdCQUFTLG1CQUFJLE9BQUosRUFBYSxRQUFiLENBQVQsRUFBaUMsUUFBakMsQ0FBUDtBQUNBOzs7Ozs7OztrQkNQdUIsUzs7QUFKeEI7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVlLFNBQVMsU0FBVCxHQUErQjtBQUFBLEtBQVosS0FBWSx1RUFBSixFQUFJOztBQUM3QyxLQUFNLFlBQVksd0JBQVMsa0JBQVQsRUFBNkIsMkJBQWEsS0FBYixFQUFvQixZQUFwQixDQUE3QixDQUFsQjtBQUNBLEtBQU0sV0FBVyx3QkFBUyxVQUFULEVBQXFCLDJCQUFhLEtBQWIsRUFBb0IsU0FBcEIsQ0FBckIsQ0FBakI7O0FBRUEsUUFBTyx3QkFBUyxtQkFBSSxTQUFKLEVBQWUsUUFBZixDQUFULEVBQW1DLFFBQW5DLEVBQTZDLE1BQTdDLENBQVA7QUFDQTs7Ozs7Ozs7UUNUZSxZLEdBQUEsWTtRQU9DLFcsR0FBQSxXO1FBSUQsQyxHQUFBLEM7QUFYVCxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDdkMsUUFBTyxPQUFPLElBQVAsQ0FBWSxHQUFaLEVBQ04sTUFETSxDQUNDO0FBQUEsU0FBTyxJQUFJLEdBQUosRUFBUyxJQUFULEtBQWtCLElBQXpCO0FBQUEsRUFERCxFQUVOLEdBRk0sQ0FFRjtBQUFBLFNBQU8sSUFBSSxHQUFKLENBQVA7QUFBQSxFQUZFLENBQVA7QUFHQTtBQUNBOztBQUVPLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUNsQyxRQUFPLFdBQVcsS0FBWCxFQUFrQixPQUFsQixDQUEwQixDQUExQixDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxDQUFULENBQVcsS0FBWCxFQUFrQjtBQUN4QixLQUFNLFdBQVcsTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQTJCLFNBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsQ0FBM0IsQ0FBakI7O0FBRUEsVUFBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3hCLFdBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3ZCLFVBQU8sSUFBSSxVQUFYLEVBQXVCO0FBQ3RCLFFBQUksV0FBSixDQUFnQixJQUFJLFVBQXBCO0FBQ0E7O0FBRUQsT0FBSSxXQUFKLENBQWdCLEtBQWhCO0FBQ0EsR0FORDtBQU9BOztBQUVELFFBQU87QUFDTjtBQURNLEVBQVA7QUFHQTs7Ozs7QUMzQkQ7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLEVBQStCLElBQS9CLEVBQXFDO0FBQ3BDLFNBQVEsS0FBUjtBQUNDLE9BQUssV0FBTDtBQUNDLFVBQU8sT0FBTyxNQUFQLENBQWUsRUFBZixFQUFtQixLQUFuQixFQUEwQjtBQUNoQyxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsVUFBQyxLQUFELEVBQVEsSUFBUjtBQUFBLFlBQ3hCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsc0JBQTRCLEtBQUssRUFBakMsRUFBc0MsSUFBdEMsRUFEd0I7QUFBQSxLQUFsQixFQUVKLEVBRkk7QUFEeUIsSUFBMUIsQ0FBUDtBQUtEO0FBQ0MsVUFBTyxLQUFQO0FBUkY7QUFVQTs7QUFFRCxJQUFNLFFBQVEsd0JBQVksT0FBWixDQUFkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFJQSxNQUFNLFdBQU4sRUFDSSxJQURKLENBQ1M7QUFBQSxRQUFPLElBQUksSUFBSixFQUFQO0FBQUEsQ0FEVCxFQUVJLElBRkosQ0FFUyxtQkFBVztBQUNmLEtBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNIOztBQUVELE1BQUssWUFBTCxDQUFrQixtQkFBSSxLQUFKLENBQWxCLEVBQThCLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUE5QjtBQUNBLE9BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkIsRUFBRSxPQUFPLE9BQVQsRUFBM0I7QUFDRyxDQVJKOzs7Ozs7OztRQ3JDZ0IsVyxHQUFBLFc7QUFOaEIsSUFBTSxlQUFlO0FBQ3BCLFFBQU8sRUFEYTtBQUVwQixPQUFPLElBQUksR0FBSixFQUZhO0FBR3BCLGNBQWE7QUFITyxDQUFyQjs7QUFNTyxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDcEMsS0FBTSxZQUFZLEVBQWxCO0FBQ0EsS0FBSSxRQUFRLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsWUFBbEIsQ0FBWjs7QUFFQSxVQUFTLEVBQVQsQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLEVBQXVCO0FBQ3RCLE1BQUksQ0FBQyxVQUFVLEtBQVYsQ0FBTCxFQUF1QjtBQUN0QixhQUFVLEtBQVYsSUFBbUIsRUFBbkI7QUFDQTs7QUFHRCxZQUFVLEtBQVYsRUFBaUIsSUFBakIsQ0FBc0IsRUFBdEI7QUFDQTs7QUFFRCxVQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBbUM7QUFBQSxNQUFYLElBQVcsdUVBQUosRUFBSTs7QUFDbEMsVUFBUSxRQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLElBQXRCLENBQVI7O0FBRUEsTUFBRyxVQUFVLEtBQVYsQ0FBSCxFQUFxQjtBQUNwQixhQUFVLEtBQVYsRUFBaUIsT0FBakIsQ0FBeUIsY0FBTTtBQUM5QixPQUFHLEtBQUg7QUFDQSxJQUZEO0FBR0E7QUFDRDs7QUFFRCxRQUFPO0FBQ04sUUFETTtBQUVOO0FBRk0sRUFBUDtBQUlBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVsKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMSguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlciguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoMyguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbiguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XG5cdGNvbnN0IGltYWdlID0gIGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRpbWFnZS5zcmMgPSBzb3VyY2U7XG5cdHJldHVybiBpbWFnZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7IGlkIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cblxuIiwiaW1wb3J0IHsgZGl2LCBhZGRJZCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IGhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKSB7XG5cdGNvbnN0IG1vZGFsRWxlID0gbW9kYWwoKTtcblx0Y29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XG5cdGNvbnN0IGhlcm9FbGUgPSBoZXJvKCk7XG5cdGNvbnN0IG1lbnVFbGUgPSBtZW51KHN0b3JlKTtcblx0Y29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7XG5cdGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xuXHRcblx0cmV0dXJuIGFwcEVsZTtcblxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm90dG9tKCkge1xuXHRjb25zdCBuYW1lID0gcCh0ZXh0KCdDaHJpcyBCb2d1ZXMnKSk7XG5cdGNvbnN0IGNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSksICdjb250ZW50JywgJ2lzLWNlbnRlcmVkJyk7XG5cblx0Y29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XG5cblx0cmV0dXJuIGFkZENsYXNzKGZvb3Rlcihjb250YWluZXIpLCAnZm9vdGVyJyk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaW1nLCBwLCBzZWN0aW9uLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XG4gIGNvbnN0IGxvZ28gPSBhZGRDbGFzcyhpbWcoJ3N0YXRpYy9mYW5jeWJlYXJfd2hpdGUucG5nJyksICdsb2dvJyk7XG4gIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XG4gIGNvbnN0IGZhbmN5QmVhciA9IGFkZENsYXNzKHAodGV4dCgnRmFuY3kgQmVhcicpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XG4gIGNvbnN0IGVhdGVyaWVzID0gYWRkQ2xhc3MocCh0ZXh0KCdFYXRlcmllcycpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5QmVhciwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaGVyb0NvbnRlbnQgPSBhZGRDbGFzcyhkaXYoY29udGFpbmVyKSwgJ2hlcm8tY29udGVudCcpO1xuXG4gIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGhlcm9Db250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XG5cdGNvbnN0IGFwcGV0aXplcnMgID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XG5cdGNvbnN0IGJ1cmdlcnMgPSBtZW51TGlzdCgnQnVyZ2VycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2J1cmdlcicpKTtcblxuXHRyZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGJ1cmdlcnMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgc2VjdGlvbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7ICQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcbmltcG9ydCByaWdodE1lbnUgZnJvbSAnLi9yaWdodE1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KHN0b3JlKSB7XG5cdGNvbnN0IG1lbnVFTGUgPSBhZGRJZChhZGRDbGFzcyhkaXYoKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xuXG5cdFx0c3RvcmUub24oJ1NFVF9JVEVNUycsICh7IGl0ZW1zIH0pID0+IHsgXG5cdFx0XHRjb25zdCBsZWZ0U2lkZSA9IGxlZnRNZW51KGl0ZW1zKTtcblx0XHRcdGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XG5cdFx0XHRjb25zdCBjb2x1bW5zICA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XG5cdFx0XHQkKCcjbWVudScpLmNoaWxkcmVuKGNvbHVtbnMpO1xuXHRcdH0pO1xuXG5cdHJldHVybiBtZW51RUxlO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBhcnRpY2xlLCBidXR0b24sIGRpdiwgaDMsIHAsIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbShpdGVtRGF0YSA9IHt9KSB7XG5cdGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhoMyh0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcblx0Y29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcblx0Y29uc3QgYWRkVG9DYXJ0ID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0FkZCB0byBDYXJ0JykpLCAnYnV0dG9uJywgJ2lzLXB1bGxlZC1yaWdodCcsICdhZGQtdG8tY2FydCcpO1xuXG5cdGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XG5cblx0Y29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xuXHRpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XG5cdFx0Ly8gYWRkcyBkYXRhIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuXG5cdHJldHVybiBpdGVtO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGgxLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51TGlzdChoZWFkbGluZSwgaXRlbXMgPSBbXSkge1xuXHRjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xuXG5cdGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dChoZWFkbGluZSkpLCAndGl0bGUnKTtcblxuXHRyZXR1cm4gYWRkQ2xhc3MoZGl2KHRpdGxlLCAuLi5tZW51SXRlbXMpLCAnY29sbGVjdGlvbicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgYnV0dG9uLCBkaXYsIGgxLCBpLCBwLCBzZWN0aW9uLCB0ZXh0LCB1bCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChpdGVtcyA9IFtdKSB7XG5cdGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XG5cdGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XG5cblx0bGV0IGNhcnQ7XG5cdGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRjYXJ0ID0gcCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHknKSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgbW9kYWxJdGVtcyA9IGl0ZW1zLm1hcChtb2RhbEl0ZW0pO1xuXHRcdGNhcnQgPSBhZGRDbGFzcyh1bCguLi5tb2RhbEl0ZW1zKSwgJ21lbnUnKTtcblx0fVxuXG5cdGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYoY2FydCksICdjYXJ0LWl0ZW1zJyk7XG5cblx0Y29uc3QgY2hlY2tvdXRCdXR0b24gPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQ2hlY2tvdXQnKSksICdidXR0b24nLCAnaXMtZnVsbHdpZHRoJyk7XG5cblx0Y29uc3QgbW9kYWxDb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY2xvc2UsIHRpdGxlLCBjYXJ0Q29udGFpbmVyLCBjaGVja291dEJ1dHRvbiksICdtb2RhbC1jb250YWluZXInKTtcblxuXHRjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XG5cblx0cmV0dXJuIG1vZGFsRWxlO1xuXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGksIGxpLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XG5cdGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuXHRjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xuXHRjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcblxuXHRjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcblx0aXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG5cdHJldHVybiBpdGVtO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW4gfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcblx0Y29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuXHRjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xuXHRjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XG5cdGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xuXHRjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XG5cblx0cmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XG5cdGNvbnN0IHNvdXBTYWxhZCA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcblx0Y29uc3QgZGVzc2VydHMgPSBtZW51TGlzdCgnRGVzc2VydHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdkZXNzZXJ0JykpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhkaXYoc291cFNhbGFkLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApXG5cdC5maWx0ZXIoa2V5ID0+IG1hcFtrZXldLnR5cGUgPT09IHR5cGUpXG5cdC5tYXAoa2V5ID0+IG1hcFtrZXldKTtcbn1cbiAvLyBmb3JtYXQgcHJpY2VcblxuIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xuIFx0cmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xuXG5cdGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuXHRcdFx0d2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNoaWxkcmVuLFxuXHR9O1xufVxuIiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XG5cdHN3aXRjaCAoZXZlbnQpIHtcblx0XHRjYXNlICdTRVRfSVRFTVMnOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24gKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oe30sIHRvdGFsLCB7IFtpdGVtLmlkXTogaXRlbSB9KVxuXHRcdFx0XHRcdCwge30pLFxuXHRcdFx0fSk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuLyogZm9yIFRFU1QgUFVSUE9TRVMgT05MWSAqL1xuLy8gc3RvcmUub24oJ0ZPTycsIHN0YXRlID0+IHtcbi8vIFx0Y29uc29sZS5sb2coJ2luIEZPTyBjYWxsYmFjaycpO1xuLy8gXHRjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XG4vLyB9KTtcblxuLy8gc3RvcmUub24oJ0JBUicsIHN0YXRlID0+IHtcbi8vIFx0Y29uc29sZS5sb2coJ2luIEJBUiBjYWxsYmFjaycpO1xuLy8gXHRjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XG4vLyB9KTtcblxuLy8gc3RvcmUub24oJ05PVF9SRUFMJywgc3RhdGUgPT4ge1xuLy8gXHRjb25zb2xlLmxvZygnaW4gTk9UX1JFQUwgY2FsbGJhY2snKTtcbi8vIFx0Y29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xuLy8gfSk7XG5cbi8vIHN0b3JlLnRyaWdnZXIoJ0JBUicsIHtcbi8vIFx0bmFtZTogJ2hvbGx5Jyxcbi8vIFx0am9iOiAndGVhY2hlcicsXG4vLyB9KTtcblxuLy8gc3RvcmUudHJpZ2dlcignRk9PJyk7XG4vLyBzdG9yZS50cmlnZ2VyKCdOT1RfUkVBTCcpO1xuXG5cblxuZmV0Y2goJ2Zvb2QuanNvbicpXG4gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgIC50aGVuKHJlc0JvZHkgPT4ge1xuICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAvLyBib2R5Lmluc2VydEJlZm9yZShhcHAoKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgXG5cdGJvZHkuaW5zZXJ0QmVmb3JlKGFwcChzdG9yZSksIGJvZHkuY2hpbGROb2Rlc1swXSk7XG5cdHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHsgaXRlbXM6IHJlc0JvZHkgfSk7XG4gICB9KTtcbiIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcblx0aXRlbXM6IHt9LFxuXHRjYXJ0OiAobmV3IFNldCgpKSxcblx0Y2FydFZpc2libGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHsgXG5cdGNvbnN0IGxpc3RlbmVycyA9IHt9O1xuXHRsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xuXG5cdGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuXHRcdGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuXHRcdFx0bGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuXHRcdH1cblxuXG5cdFx0bGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQsIGRhdGEgPSB7fSkge1xuXHRcdHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpO1xuXG5cdFx0aWYobGlzdGVuZXJzW2V2ZW50XSkge1xuXHRcdFx0bGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNiID0+IHtcblx0XHRcdFx0Y2Ioc3RhdGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRvbixcblx0XHR0cmlnZ2VyLFxuXHR9O1xufSJdfQ==
