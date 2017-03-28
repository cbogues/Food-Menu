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

	function on(event, cb) {
		elements.forEach(function (ele) {
			ele.addEventListener(event, cb);
		});
	}

	return {
		children: children,
		on: on
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
			return Object.assign({}, state);
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
	(0, _helpers.$)('#cart-icon').on('click', function () {
		store.trigger('TOGGLE_SHOW_CART');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBSUEsQyxHQUFBLEM7UUFJQSxJLEdBQUEsSTtRQUlBLEcsR0FBQSxHO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLE8sR0FBQSxPO1FBSUEsQyxHQUFBLEM7UUFJQSxFLEdBQUEsRTtRQUlBLE8sR0FBQSxPO1FBSUEsTSxHQUFBLE07UUFJQSxFLEdBQUEsRTtRQUlBLE0sR0FBQSxNO1FBSUEsRyxHQUFBLEc7UUFPQSxLLEdBQUEsSztRQUtBLFEsR0FBQSxRO0FBMUVULFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDM0IsUUFBTyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNBOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztB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Y2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xuXHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0Y2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG5cdHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnLC4uLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gxJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywuLi5jaGlsZHJlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsLi4uY2hpbGRyZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xuXHRjb25zdCBpbWFnZSA9ICBjcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1hZ2Uuc3JjID0gc291cmNlO1xuXHRyZXR1cm4gaW1hZ2U7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XG5cdGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XG5cdHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5cbiIsImltcG9ydCB7IGRpdiwgYWRkSWQgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGJvdHRvbSBmcm9tICcuL2JvdHRvbSc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChzdG9yZSkge1xuXHRjb25zdCBtb2RhbEVsZSA9IG1vZGFsKCk7XG5cdGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xuXHRjb25zdCBoZXJvRWxlID0gaGVybygpO1xuXHRjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XG5cdGNvbnN0IGJvdHRvbUVsZSA9IGJvdHRvbSgpO1xuXHRjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobW9kYWxFbGUsIG5hdmJhckVsZSwgaGVyb0VsZSwgbWVudUVsZSwgYm90dG9tRWxlKSwgJ2FwcC1jb250YWluZXInKTtcblx0XG5cdHJldHVybiBhcHBFbGU7XG5cbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBmb290ZXIsIHRleHQsIHAgfSBmcm9tICcuLi9idWlsZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcblx0Y29uc3QgbmFtZSA9IHAodGV4dCgnQ2hyaXMgQm9ndWVzJykpO1xuXHRjb25zdCBjb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUpLCAnY29udGVudCcsICdpcy1jZW50ZXJlZCcpO1xuXG5cdGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjb250ZW50KSwgJ2NvbnRhaW5lcicpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvKCkge1xuICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvZmFuY3liZWFyX3doaXRlLnBuZycpLCAnbG9nbycpO1xuICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xuICBjb25zdCBmYW5jeUJlYXIgPSBhZGRDbGFzcyhwKHRleHQoJ0ZhbmN5IEJlYXInKSksICdoZXJvLXRleHQtYm9sZCcpO1xuICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnRWF0ZXJpZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcblxuICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBmYW5jeUJlYXIsIGVhdGVyaWVzKSwgJ2NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhlcm9Db250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcblxuICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xuXHRjb25zdCBhcHBldGl6ZXJzICA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xuXHRjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XG5cblx0cmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBidXJnZXJzKSwgJ2NvbHVtbicsICdpcy02Jyk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIHNlY3Rpb24gfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShzdG9yZSkge1xuXHRjb25zdCBtZW51RUxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcblxuXHRcdHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7IFxuXHRcdFx0Y29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XG5cdFx0XHRjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xuXHRcdFx0Y29uc3QgY29sdW1ucyAgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xuXHRcdFx0JCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcblx0XHR9KTtcblxuXHRyZXR1cm4gbWVudUVMZTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSkge1xuXHRjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XG5cdGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGAkJHtmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSl9YCkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkQ2xhc3MocCh0ZXh0KGl0ZW1EYXRhLmRlc2NyaXB0aW9uKSksICdkZXNjJyk7XG5cdGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcblxuXHRjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xuXG5cdGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhhcnRpY2xlKG1lZGlhQ29udGVudCksICdtZWRpYScsICdtZW51X2l0ZW0nKTtcblx0aXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xuXHRcdC8vIGFkZHMgZGF0YSBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcblxuXHRyZXR1cm4gaXRlbTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcblx0Y29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcblxuXHRjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoaGVhZGxpbmUpKSwgJ3RpdGxlJyk7XG5cblx0cmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoaXRlbXMgPSBbXSkge1xuXHRjb25zdCBjbG9zZSA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ2Nsb3NlJyksICdjbG9zZScpO1xuXHRjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoJ0NhcnQnKSksICd0aXRsZScpO1xuXG5cdGxldCBjYXJ0O1xuXHRpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y2FydCA9IHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5JykpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IG1vZGFsSXRlbXMgPSBpdGVtcy5tYXAobW9kYWxJdGVtKTtcblx0XHRjYXJ0ID0gYWRkQ2xhc3ModWwoLi4ubW9kYWxJdGVtcyksICdtZW51Jyk7XG5cdH1cblxuXHRjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KGNhcnQpLCAnY2FydC1pdGVtcycpO1xuXG5cdGNvbnN0IGNoZWNrb3V0QnV0dG9uID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0NoZWNrb3V0JykpLCAnYnV0dG9uJywgJ2lzLWZ1bGx3aWR0aCcpO1xuXG5cdGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XG5cblx0Y29uc3QgbW9kYWxFbGUgPSBhZGRJZChhZGRDbGFzcyhzZWN0aW9uKG1vZGFsQ29udGFpbmVyKSwgJ21vZGFsJyksICdtb2RhbCcpO1xuXG5cdHJldHVybiBtb2RhbEVsZTtcblxufSIsImltcG9ydCB7IGFkZENsYXNzLCBpLCBsaSwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xuXHRjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcblx0Y29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoZm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcblx0Y29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XG5cblx0Y29uc3QgaXRlbSA9IGFkZENsYXNzKGxpKG5hbWUsIHByaWNlLCByZW1vdmVCdXR0b24pLCAnbWVudS1pdGVtJyk7XG5cdGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcblxuXHRyZXR1cm4gaXRlbTtcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG5cdGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XG5cblx0Y29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcblx0Y29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xuXHRjb25zdCBuYXZiYXJJdGVtID0gYWRkQ2xhc3MoZGl2KGNhcnRJY29uLCBjYXJ0SXRlbXMpLCAnbmF2YmFyLWl0ZW0nKTtcblx0Y29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xuXG5cdHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodE1lbnUoaXRlbXMgPSBbXSkge1xuXHRjb25zdCBzb3VwU2FsYWQgPSBtZW51TGlzdCgnU291cHMgYW5kIFNhbGFkcycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ3NvdXBfc2FsYWQnKSk7XG5cdGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcblxuXHRyZXR1cm4gYWRkQ2xhc3MoZGl2KHNvdXBTYWxhZCwgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKVxuXHQuZmlsdGVyKGtleSA9PiBtYXBba2V5XS50eXBlID09PSB0eXBlKVxuXHQubWFwKGtleSA9PiBtYXBba2V5XSk7XG59XG4gLy8gZm9ybWF0IHByaWNlXG5cbiBleHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcbiBcdHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJChxdWVyeSkge1xuXHRjb25zdCBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcblxuXHRmdW5jdGlvbiBjaGlsZHJlbih0b0FkZCkge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcblx0XHRcdHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGUuYXBwZW5kQ2hpbGQodG9BZGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XG5cdFx0ZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xuXHRcdFx0ZWxlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2hpbGRyZW4sXG5cdFx0b25cblx0fTtcbn1cbiIsImltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHNldHVwTGlzdGVuZXJzIGZyb20gJy4vc2V0dXBfbGlzdGVuZXJzJztcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcblx0c3dpdGNoIChldmVudCkge1xuXHRcdGNhc2UgJ1NFVF9JVEVNUyc6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbiAoe30sIHN0YXRlLCB7XG5cdFx0XHRcdGl0ZW1zOiBkYXRhLml0ZW1zLnJlZHVjZSgodG90YWwsIGl0ZW0pID0+XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih7fSwgdG90YWwsIHsgW2l0ZW0uaWRdOiBpdGVtIH0pXG5cdFx0XHRcdFx0LCB7fSksXG5cdFx0XHR9KTtcblx0XHRjYXNlICdUT0dHTEVfU0hPV19DQVJUJzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwpXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuLyogZm9yIFRFU1QgUFVSUE9TRVMgT05MWSAqL1xuLy8gc3RvcmUub24oJ0ZPTycsIHN0YXRlID0+IHtcbi8vIFx0Y29uc29sZS5sb2coJ2luIEZPTyBjYWxsYmFjaycpO1xuLy8gXHRjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XG4vLyB9KTtcblxuLy8gc3RvcmUub24oJ0JBUicsIHN0YXRlID0+IHtcbi8vIFx0Y29uc29sZS5sb2coJ2luIEJBUiBjYWxsYmFjaycpO1xuLy8gXHRjb25zb2xlLmxvZygnc3RhdGUnLCBzdGF0ZSk7XG4vLyB9KTtcblxuLy8gc3RvcmUub24oJ05PVF9SRUFMJywgc3RhdGUgPT4ge1xuLy8gXHRjb25zb2xlLmxvZygnaW4gTk9UX1JFQUwgY2FsbGJhY2snKTtcbi8vIFx0Y29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xuLy8gfSk7XG5cbi8vIHN0b3JlLnRyaWdnZXIoJ0JBUicsIHtcbi8vIFx0bmFtZTogJ2hvbGx5Jyxcbi8vIFx0am9iOiAndGVhY2hlcicsXG4vLyB9KTtcblxuLy8gc3RvcmUudHJpZ2dlcignRk9PJyk7XG4vLyBzdG9yZS50cmlnZ2VyKCdOT1RfUkVBTCcpO1xuXG5cblxuZmV0Y2goJ2Zvb2QuanNvbicpXG4gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgIC50aGVuKHJlc0JvZHkgPT4ge1xuICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAvLyBib2R5Lmluc2VydEJlZm9yZShhcHAoKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgXG5cdGJvZHkuaW5zZXJ0QmVmb3JlKGFwcChzdG9yZSksIGJvZHkuY2hpbGROb2Rlc1swXSk7XG5cdHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHsgaXRlbXM6IHJlc0JvZHkgfSk7XG5cdHNldHVwTGlzdGVuZXJzKHN0b3JlKTtcbiAgIH0pO1xuIiwiaW1wb3J0IHsgJCB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0b3JlKSB7XG5cdCQoJyNjYXJ0LWljb24nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0c3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xuXHR9KTtcbn0iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG5cdGl0ZW1zOiB7fSxcblx0Y2FydDogKG5ldyBTZXQoKSksXG5cdGNhcnRWaXNpYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7IFxuXHRjb25zdCBsaXN0ZW5lcnMgPSB7fTtcblx0bGV0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFN0YXRlKTtcblxuXHRmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcblx0XHRpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcblx0XHRcdGxpc3RlbmVyc1tldmVudF0gPSBbXTtcblx0XHR9XG5cblxuXHRcdGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcblx0XHRzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKTtcblxuXHRcdGlmKGxpc3RlbmVyc1tldmVudF0pIHtcblx0XHRcdGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYiA9PiB7XG5cdFx0XHRcdGNiKHN0YXRlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0b24sXG5cdFx0dHJpZ2dlcixcblx0fTtcbn0iXX0=
