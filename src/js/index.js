// import app from './components/app';


import app from './components/app';

const body = document.querySelector('body');

fetch('food.json')
   .then(res => res.json())
   .then(resBody => {
     const body = document.querySelector('body');
     body.style.backgroundColor = '#C00C00';
		console.log(resBody); 
  // body.insertBefore(app(), body.childNodes[0]);
     
     body.insertBefore(resBody, document.body.childNodes[0]);
   });
