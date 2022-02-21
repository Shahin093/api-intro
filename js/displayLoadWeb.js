
function displayDataLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('users');
    for (user of data) {
        const li = document.createElement('li');
        li.innerText = ` name : ${user.name} , Email : ${user.email} ,`
        ul.appendChild(li);
    }
}