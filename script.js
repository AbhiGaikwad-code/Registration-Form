function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('All fields must be filled out');
        return;
    }

    alert('Thanks For Registration!');
    // Here you can add further actions like sending the data to a server.
}
