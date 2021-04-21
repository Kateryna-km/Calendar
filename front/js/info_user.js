const id = localStorage.getItem('id');
const token = localStorage.getItem('token');
const request = new XMLHttpRequest();
const url = `http://localhost:5000/user/${id}`;
const reqURL = new URL(url);

request.open('GET', reqURL.toString(), false);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', `Bearer ${token}`);

const fn = document.getElementById('fname');
const ln = document.getElementById('lname');
const un = document.getElementById('username');
const em = document.getElementById('email');
const ph = document.getElementById('phone');

request.send();

fn.insertAdjacentHTML('beforeend', JSON.parse(request.responseText).firstName);
ln.insertAdjacentHTML('beforeend', JSON.parse(request.responseText).lastName);
un.insertAdjacentHTML('beforeend', JSON.parse(request.responseText).username);
em.insertAdjacentHTML('beforeend', JSON.parse(request.responseText).email);
ph.insertAdjacentHTML('beforeend', JSON.parse(request.responseText).phone);
