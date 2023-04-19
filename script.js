document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    /** NAO TEM API PRA CONSUMIR SÓ ENTENDEMOS ATÉ AQUI */
    fetch('https://fake-auth-api.com/login', {
        method: 'POST',
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Incorrect username or password');
            }
            return response.json();
        })
        .then(data => {
            sessionStorage.setItem('authToken', data.authToken);
            window.location.href = 'home.html';
        })
        .catch(error => {
            document.getElementById('login-error').style.display = 'block';
            console.error(error);
        });
});
