function validForm(e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let msg = document.getElementById('textarea');
    let nmerr = document.getElementById('nmErr');
    let emailErr = document.getElementById('emailErr');
    let msgErr = document.getElementById('msgErr');

    let isvalid = true;

    nmerr.textContent = '';
    if (name.value.trim() === '') {
        nmerr.textContent = 'Name is required';
        isvalid = false;
    }

    emailErr.textContent = '';
    if (!email.value.includes('@')) {
        emailErr.textContent = 'invalid email';
        isvalid = false;
    }

    msgErr.textContent = '';
    if (msg.value.trim() === '') {
        msgErr.textContent = 'Fill up the Message';
        isvalid = false;
    }

    if (isvalid) {
        alert("Form submitted!");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});
