function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:n.kelvinnjuguna@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    return false; // Prevent the default form submission
}
