if (document.forms[0] && window.FormData) {
    const form = document.forms[0];

    const request = new XMLHttpRequest();
    const reqURL = new URL('http://localhost:5000/user/login');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const un = encodeURIComponent(document.getElementById('username').value);
        const ps = encodeURIComponent(document.getElementById('password').value);

        reqURL.searchParams.append('username', un);
        reqURL.searchParams.append('password', ps);

        request.open('POST', reqURL.toString(), false);
        request.setRequestHeader('Content-Type', 'application/json');

        request.send();
        localStorage.setItem('id', JSON.parse(request.responseText).id_user);
        localStorage.setItem('token', JSON.parse(request.responseText).access_token);

        request.onreadystatechange = function f() {
            if (request.readyState === 4) {
                if (request.status === 200 && request.status < 300) window.location.href = 'info_user.html';
            }
        };
    });
}
