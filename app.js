window.onload = () => {
    document.querySelector('#excuse'). innerHTML = result();
};
    
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
 
let whoResult = Math.floor(Math.random()*who.length);
let actionResult = Math.floor(Math.random()*action.length);
let whatResult = Math.floor(Math.random()*what.length);
let whenResult = Math.floor(Math.random()*when.length);
    
let result = () => {
    return who[whoResult] + " " + action[actionResult] + " " + what[whatResult] + " " + when[whenResult]
};





