window.onload = () => {
    document.querySelector('#excuse'). innerHTML = result();
};

 result = () => {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let who_result = Math.floor(Math.random()*who.length);
    let action_result = Math.floor(Math.random()*action.length);
    let what_result = Math.floor(Math.random()*what.length);
    let when_result = Math.floor(Math.random()*when.length);

    return who[who_result] + " " + action[action_result] + " " + what[what_result] + " " + when[when_result]
};





