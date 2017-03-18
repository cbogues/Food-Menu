import app from './components/app';

const body = document.querySelector('body');

fetch('food.json')
   .then(res => res.json())
   .then(resBody => {
     const body = document.querySelector('body');
  // body.insertBefore(app(), body.childNodes[0]);
     
	body.insertBefore(app(resBody), body.childNodes[0]);
   });
