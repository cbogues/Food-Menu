import app from './components/app';
import { createStore } from './state';
import setupListeners from './setup_listeners';

function reducer(state, event, data) {
	switch (event) {
		case 'SET_ITEMS':
			return Object.assign ({}, state, {
				items: data.items.reduce((total, item) =>
					Object.assign({}, total, { [item.id]: item })
					, {}),
			});
		case 'TOGGLE_SHOW_CART':
			return Object.assign({}, state,)
		default:
			return state;
	}
}

const store = createStore(reducer);
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



fetch('food.json')
   .then(res => res.json())
   .then(resBody => {
     const body = document.querySelector('body');
  // body.insertBefore(app(), body.childNodes[0]);
     
	body.insertBefore(app(store), body.childNodes[0]);
	store.trigger('SET_ITEMS', { items: resBody });
	setupListeners(store);
   });
