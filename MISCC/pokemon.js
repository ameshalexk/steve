//fetch user data from jsonplaceholder
//generate a user list on the web page
//add a click event to the body that will
//refresh the list each time with a random
//number of users

const uri = 'http://jsonplaceholder.typicode.com/users';

let req = new Request(uri, {
    method: 'GET',
    mode: 'cors'
});

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!');
        }
    })
    .then( (jsonData) =>{
        //console.log(jsonData);
        let ul = document.querySelector('#users');
        let df = new DocumentFragment();
        jsonData.forEach( (user) =>{
            let li = document.createElement('li');
            let pn = document.createElement('p');
            let pue = document.createElement('p');
            pn.textContent = user.name;
            pue.textContent = ''.concat(user.username, ' - ', user.email);
            pn.className = 'name';
            pue.classList.add('info');
            li.appendChild(pn);
            li.appendChild(pue);
            df.appendChild(li);
        });
        ul.appendChild(df);
        console.log(document.body.h1.typeNode);
        console.log(document.body.script);
        console.log(document.body.querySelector('script'));
        console.log(document.body.querySelectorAll('script').firstelementchild);

    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
