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
	var modalEle = (0, _modal2.default)(store);
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menu(store) {
	var menuELe = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

	store.on('SET_ITEMS', function (_ref) {
		var items = _ref.items;

		var leftSide = (0, _leftMenu2.default)(items);
		var rightSide = (0, _rightMenu2.default)(items);
		var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
		(0, _helpers.$)('#menu').children(columns);
	});

	store.on('ITEM_ADDED', function (_ref2) {
		var cart = _ref2.cart;

		var cartArray = [].concat(_toConsumableArray(cart));
		var articles = cartArray.map(function (id) {
			return 'article[data-key=\'' + id + '\']';
		});
		var buttons = cartArray.map(function (id) {
			return 'article[data-key=\'' + id + '\'] button.add-to-cart';
		});

		(0, _helpers.$)(articles.join(', ')).addClass('in-cart');
		(0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
	});

	store.on('ITEM_REMOVED', function (_ref3) {
		var cart = _ref3.cart;

		var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
			return parseInt(ele.dataset.key, 10);
		});
		var inCartKeys = [].concat(_toConsumableArray(cart));
		var keysToRemove = onPageKeys.filter(function (key) {
			return !inCartKeys.includes(key);
		});

		keysToRemove.forEach(function (key) {
			(0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
			(0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
		});
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

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
	var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
	var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

	var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty'))), 'cart-items');

	var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

	var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

	var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

	store.on('TOGGLE_SHOW_CART', function (_ref) {
		var cartVisible = _ref.cartVisible;

		var ele = (0, _helpers.$)('#modal');
		if (cartVisible) {
			ele.addClass('show');
		} else {
			ele.removeClass('show');
		}
	});

	store.on('ITEM_ADDED', function (_ref2) {
		var items = _ref2.items,
		    cart = _ref2.cart;

		var cartArray = [].concat(_toConsumableArray(cart));
		var cartItems = cartArray.map(function (itemId) {
			return (0, _modalItem2.default)(items[itemId]);
		});
		var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
		(0, _helpers.$)('#cart-items').children(cartList);
	});

	return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
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

	function on(event, cb) {
		elements.forEach(function (ele) {
			ele.addEventListener(event, cb);
		});
	}

	function children(toAdd) {
		elements.forEach(function (ele) {
			while (ele.firstChild) {
				ele.removeChild(ele.firstChild);
			}

			ele.appendChild(toAdd);
		});
	}

	function addClass(klass) {
		elements.forEach(function (ele) {
			ele.classList.add(klass);
		});
	}

	function removeClass(klass) {
		elements.forEach(function (ele) {
			ele.classList.remove(klass);
		});
	}

	function attr(attribute, value) {
		elements.forEach(function (ele) {
			if (value === false) {
				ele.removeAttribute(attribute);
			} else {
				ele.setAttribute(attribute, value);
			}
		});
	}

	function map(cb) {
		return elements.map(cb);
	}

	return {
		children: children,
		on: on,
		addClass: addClass,
		removeClass: removeClass,
		attr: attr,
		map: map
	};
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

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
		case 'TOGGLE_SHOW_CART':
			return Object.assign({}, state, {
				cartVisible: !state.cartVisible
			});
		case 'ITEM_ADDED':
			return Object.assign({}, state, {
				cart: new Set(state.cart).add(data.item)
			});
		case 'ITEM_REMOVED':
			var newCart = new Set(state.cart);
			newCart.delete(data.item);
			return Object.assign({}, state, {
				cart: newCart
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
	(0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (store) {
	(0, _helpers.$)('#cart-icon, #close').on('click', function () {
		store.trigger('TOGGLE_SHOW_CART');
	});

	function getParentWithKey(element) {
		var parent = element.parentElement;

		while (parent && !parent.dataset.key) {
			parent = parent.parentElement;
		}

		return parent;
	}

	(0, _helpers.$)('.add-to-cart').on('click', function (e) {
		var parent = getParentWithKey(e.currentTarget);

		var key = parseInt(parent.dataset.key, 10);
		store.trigger('ITEM_ADDED', { item: key });
	});

	(0, _helpers.$)('body').on('click', function (e) {
		if (e.target.classList.contains('remove')) {
			var element = e.target;
			var parent = getParentWithKey(element);
			var key = parseInt(parent.dataset.key, 10);

			parent.parentElement.removeChild(parent);
			store.trigger('ITEM_REMOVED', { item: key });
		}
	});
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBSUEsQyxHQUFBLEM7UUFJQSxJLEdBQUEsSTtRQUlBLEcsR0FBQSxHO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLE8sR0FBQSxPO1FBSUEsQyxHQUFBLEM7UUFJQSxFLEdBQUEsRTtRQUlBLE8sR0FBQSxPO1FBSUEsTSxHQUFBLE07UUFJQSxFLEdBQUEsRTtRQUlBLE0sR0FBQSxNO1FBSUEsRyxHQUFBLEc7UUFPQSxLLEdBQUEsSztRQUtBLFEsR0FBQSxRO0FBMUVULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDM0IsUUFBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNBOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztB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QUVELFFBQU87QUFDTixRQURNO0FBRU47QUFGTSxFQUFQO0FBSUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaSguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcblx0Y29uc3QgaW1hZ2UgPSAgY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGltYWdlLnNyYyA9IHNvdXJjZTtcblx0cmV0dXJuIGltYWdlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0a2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xuXHRyZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuXG4iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBib3R0b20gZnJvbSAnLi9ib3R0b20nO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoc3RvcmUpIHtcblx0Y29uc3QgbW9kYWxFbGUgPSBtb2RhbChzdG9yZSk7XG5cdGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xuXHRjb25zdCBoZXJvRWxlID0gaGVybygpO1xuXHRjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XG5cdGNvbnN0IGJvdHRvbUVsZSA9IGJvdHRvbSgpO1xuXHRjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobW9kYWxFbGUsIG5hdmJhckVsZSwgaGVyb0VsZSwgbWVudUVsZSwgYm90dG9tRWxlKSwgJ2FwcC1jb250YWluZXInKTtcblx0XG5cdHJldHVybiBhcHBFbGU7XG5cbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBmb290ZXIsIHRleHQsIHAgfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcblx0Y29uc3QgbmFtZSA9IHAodGV4dCgnQ2hyaXMgQm9ndWVzJykpO1xuXHRjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG5cdGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjb250ZW50KSwgJ2NvbnRhaW5lcicpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvKCkge1xuICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvZmFuY3liZWFyX3doaXRlLnBuZycpLCAnbG9nbycpO1xuICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuICBjb25zdCBmYW5jeUJlYXIgPSBhZGRDbGFzcyhwKHRleHQoJ0ZhbmN5IEJlYXInKSksICdoZXJvLXRleHQtYm9sZCcpO1xuICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnRWF0ZXJpZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcblxuICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBmYW5jeUJlYXIsIGVhdGVyaWVzKSwgJ2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhlcm9Db250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xuXHRjb25zdCBhcHBldGl6ZXJzICA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuXHRjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XG5cblx0cmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBidXJnZXJzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIHNlY3Rpb24gfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShzdG9yZSkge1xuXHRjb25zdCBtZW51RUxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcblxuXHRcdHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7IFxuXHRcdFx0Y29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XG5cdFx0XHRjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xuXHRcdFx0Y29uc3QgY29sdW1ucyAgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xuXHRcdFx0JCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcblx0XHR9KTtcblxuXHRzdG9yZS5vbignSVRFTV9BRERFRCcsICh7IGNhcnQgfSkgPT4ge1xuXHRcdGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcblx0XHRjb25zdCBhcnRpY2xlcyA9IGNhcnRBcnJheS5tYXAoaWQgPT4gYGFydGljbGVbZGF0YS1rZXk9JyR7aWR9J11gKTtcblx0XHRjb25zdCBidXR0b25zID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXSBidXR0b24uYWRkLXRvLWNhcnRgKTtcblxuXHRcdCQoYXJ0aWNsZXMuam9pbignLCAnKSkuYWRkQ2xhc3MoJ2luLWNhcnQnKTtcblx0XHQkKGJ1dHRvbnMuam9pbignLCAnKSkuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcdFx0XG5cdH0pO1xuXG5cdHN0b3JlLm9uKCdJVEVNX1JFTU9WRUQnLCAoeyBjYXJ0IH0pID0+IHtcblx0XHRjb25zdCBvblBhZ2VLZXlzID0gJCgnYXJ0aWNsZS5pbi1jYXJ0JykubWFwKGVsZSA9PiBwYXJzZUludChlbGUuZGF0YXNldC5rZXksIDEwKSk7XG5cdFx0Y29uc3QgaW5DYXJ0S2V5cyA9IFsuLi5jYXJ0XTtcblx0XHRjb25zdCBrZXlzVG9SZW1vdmUgPSBvblBhZ2VLZXlzLmZpbHRlcihrZXkgPT4gIWluQ2FydEtleXMuaW5jbHVkZXMoa2V5KSk7XG5cblx0XHRrZXlzVG9SZW1vdmUuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0JChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J11gKS5yZW1vdmVDbGFzcygnaW4tY2FydCcpO1xuXHRcdFx0JChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J10gYnV0dG9uLmFkZC10by1jYXJ0YCkuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cblxuXHRyZXR1cm4gbWVudUVMZTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSkge1xuXHRjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG5cdGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGAkJHtmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSl9YCkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkQ2xhc3MocCh0ZXh0KGl0ZW1EYXRhLmRlc2NyaXB0aW9uKSksICdkZXNjJyk7XG5cdGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuXHRjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xuXG5cdGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhhcnRpY2xlKG1lZGlhQ29udGVudCksICdtZWRpYScsICdtZW51X2l0ZW0nKTtcblx0aXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXHRcdC8vIGFkZHMgZGF0YSBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcblxuXHRyZXR1cm4gaXRlbTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcblx0Y29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcblxuXHRjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoaGVhZGxpbmUpKSwgJ3RpdGxlJyk7XG5cblx0cmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoc3RvcmUpIHtcblx0Y29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcblx0Y29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcblxuXHRjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5JykpKSwgJ2NhcnQtaXRlbXMnKTtcblxuXHRjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcblxuXHRjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwgJ21vZGFsLWNvbnRhaW5lcicpO1xuXG5cdGNvbnN0IG1vZGFsRWxlID0gYWRkSWQoYWRkQ2xhc3Moc2VjdGlvbihtb2RhbENvbnRhaW5lciksICdtb2RhbCcpLCAnbW9kYWwnKTtcblxuXHRzdG9yZS5vbignVE9HR0xFX1NIT1dfQ0FSVCcsICh7IGNhcnRWaXNpYmxlIH0pID0+IHtcblx0XHRjb25zdCBlbGUgPSAkKCcjbW9kYWwnKTtcblx0XHRpZiAoY2FydFZpc2libGUpIHtcblx0XHRcdGVsZS5hZGRDbGFzcygnc2hvdycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblx0XHR9XG5cdH0pO1xuXG5cdHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgaXRlbXMsIGNhcnQgfSk9PiB7XG5cdFx0Y29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xuXHRcdGNvbnN0IGNhcnRJdGVtcyA9IGNhcnRBcnJheS5tYXAoaXRlbUlkID0+IG1vZGFsSXRlbShpdGVtc1tpdGVtSWRdKSk7XG5cdFx0Y29uc3QgY2FydExpc3QgPSBhZGRDbGFzcyh1bCguLi5jYXJ0SXRlbXMpLCAnbWVudScpO1xuXHRcdCQoJyNjYXJ0LWl0ZW1zJykuY2hpbGRyZW4oY2FydExpc3QpO1xuXHR9KTtcblxuXG5cblx0cmV0dXJuIG1vZGFsRWxlO1xuXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGksIGxpLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XG5cdGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xuXHRjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xuXHRjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcblxuXHRjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcblx0aXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXG5cdHJldHVybiBpdGVtO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW4gfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcblx0Y29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcblxuXHRjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xuXHRjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XG5cdGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xuXHRjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XG5cblx0cmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XG5cdGNvbnN0IHNvdXBTYWxhZCA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcblx0Y29uc3QgZGVzc2VydHMgPSBtZW51TGlzdCgnRGVzc2VydHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdkZXNzZXJ0JykpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhkaXYoc291cFNhbGFkLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApXG5cdC5maWx0ZXIoa2V5ID0+IG1hcFtrZXldLnR5cGUgPT09IHR5cGUpXG5cdC5tYXAoa2V5ID0+IG1hcFtrZXldKTtcbn1cbiAvLyBmb3JtYXQgcHJpY2VcblxuIGV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xuIFx0cmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xuXG5cdGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcblx0XHRcdGVsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGlsZHJlbih0b0FkZCkge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcblx0XHRcdHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGUuYXBwZW5kQ2hpbGQodG9BZGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQ2xhc3Moa2xhc3MpIHtcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XG5cdFx0XHRlbGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDbGFzcyhrbGFzcykge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcblx0XHRcdGVsZS5jbGFzc0xpc3QucmVtb3ZlKGtsYXNzKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGF0dHIoYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0ZWxlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRlbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWFwKGNiKSB7XG5cdFx0cmV0dXJuIGVsZW1lbnRzLm1hcChjYik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNoaWxkcmVuLFxuXHRcdG9uLFxuXHRcdGFkZENsYXNzLFxuXHRcdHJlbW92ZUNsYXNzLFxuXHRcdGF0dHIsXG5cdFx0bWFwXG5cdH07XG59XG4iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCBzZXR1cExpc3RlbmVycyBmcm9tICcuL3NldHVwX2xpc3RlbmVycyc7XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XG5cdHN3aXRjaCAoZXZlbnQpIHtcblx0XHRjYXNlICdTRVRfSVRFTVMnOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24gKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24oe30sIHRvdGFsLCB7IFtpdGVtLmlkXTogaXRlbSB9KVxuXHRcdFx0XHRcdCwge30pLFxuXHRcdFx0fSk7XG5cdFx0Y2FzZSAnVE9HR0xFX1NIT1dfQ0FSVCc6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0Y2FydFZpc2libGU6ICFzdGF0ZS5jYXJ0VmlzaWJsZSxcblx0XHRcdH0pO1xuXHRcdGNhc2UgJ0lURU1fQURERUQnOlxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0Y2FydDogKG5ldyBTZXQoc3RhdGUuY2FydCkpLmFkZChkYXRhLml0ZW0pLFxuXHRcdH0pO1x0XG5cdFx0Y2FzZSAnSVRFTV9SRU1PVkVEJzpcblx0XHRcdGNvbnN0IG5ld0NhcnQgPSAobmV3IFNldChzdGF0ZS5jYXJ0KSk7XG5cdFx0XHRuZXdDYXJ0LmRlbGV0ZShkYXRhLml0ZW0pO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGNhcnQ6IG5ld0NhcnQsXG5cdFx0XHR9KTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG4vKiBmb3IgVEVTVCBQVVJQT1NFUyBPTkxZICovXG4vLyBzdG9yZS5vbignRk9PJywgc3RhdGUgPT4ge1xuLy8gXHRjb25zb2xlLmxvZygnaW4gRk9PIGNhbGxiYWNrJyk7XG4vLyBcdGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcbi8vIH0pO1xuXG4vLyBzdG9yZS5vbignQkFSJywgc3RhdGUgPT4ge1xuLy8gXHRjb25zb2xlLmxvZygnaW4gQkFSIGNhbGxiYWNrJyk7XG4vLyBcdGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcbi8vIH0pO1xuXG4vLyBzdG9yZS5vbignTk9UX1JFQUwnLCBzdGF0ZSA9PiB7XG4vLyBcdGNvbnNvbGUubG9nKCdpbiBOT1RfUkVBTCBjYWxsYmFjaycpO1xuLy8gXHRjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XG4vLyB9KTtcblxuLy8gc3RvcmUudHJpZ2dlcignQkFSJywge1xuLy8gXHRuYW1lOiAnaG9sbHknLFxuLy8gXHRqb2I6ICd0ZWFjaGVyJyxcbi8vIH0pO1xuXG4vLyBzdG9yZS50cmlnZ2VyKCdGT08nKTtcbi8vIHN0b3JlLnRyaWdnZXIoJ05PVF9SRUFMJyk7XG5cblxuXG5mZXRjaCgnZm9vZC5qc29uJylcbiAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgLnRoZW4ocmVzQm9keSA9PiB7XG4gICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIC8vIGJvZHkuaW5zZXJ0QmVmb3JlKGFwcCgpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xuICAgICBcblx0Ym9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcblx0c3RvcmUudHJpZ2dlcignU0VUX0lURU1TJywgeyBpdGVtczogcmVzQm9keSB9KTtcblx0c2V0dXBMaXN0ZW5lcnMoc3RvcmUpO1xuICAgfSk7XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0b3JlKSB7XG5cdCQoJyNjYXJ0LWljb24sICNjbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRzdG9yZS50cmlnZ2VyKCdUT0dHTEVfU0hPV19DQVJUJyk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGdldFBhcmVudFdpdGhLZXkoZWxlbWVudCkge1xuXHRcdGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cblx0XHR3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuZGF0YXNldC5rZXkpIHtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJlbnQ7XG5cdH1cblxuXHQkKCcuYWRkLXRvLWNhcnQnKS5vbignY2xpY2snLCBlID0+IHtcblx0XHRjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGUuY3VycmVudFRhcmdldCk7XG5cblx0XHRjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcblx0XHRzdG9yZS50cmlnZ2VyKCdJVEVNX0FEREVEJywgeyBpdGVtOiBrZXkgfSk7XG5cdH0pO1xuXG5cdCQoJ2JvZHknKS5vbignY2xpY2snLCBlID0+IHtcblx0XHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSkge1xuXHRcdFx0Y29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuXHRcdFx0Y29uc3QgcGFyZW50ID0gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KTtcblx0XHRcdGNvbnN0IGtleSA9IHBhcnNlSW50KHBhcmVudC5kYXRhc2V0LmtleSwgMTApO1xuXG5cdFx0XHRwYXJlbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnQpO1xuXHRcdFx0c3RvcmUudHJpZ2dlcignSVRFTV9SRU1PVkVEJywgeyBpdGVtOiBrZXkgfSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuXHRpdGVtczoge30sXG5cdGNhcnQ6IChuZXcgU2V0KCkpLFxuXHRjYXJ0VmlzaWJsZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikgeyBcblx0Y29uc3QgbGlzdGVuZXJzID0ge307XG5cdGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XG5cblx0ZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG5cdFx0aWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XG5cdFx0XHRsaXN0ZW5lcnNbZXZlbnRdID0gW107XG5cdFx0fVxuXG5cblx0XHRsaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2IpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSA9IHt9KSB7XG5cdFx0c3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XG5cblx0XHRpZihsaXN0ZW5lcnNbZXZlbnRdKSB7XG5cdFx0XHRsaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goY2IgPT4ge1xuXHRcdFx0XHRjYihzdGF0ZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG9uLFxuXHRcdHRyaWdnZXIsXG5cdH07XG59Il19
