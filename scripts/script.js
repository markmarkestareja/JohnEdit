let menuIcon = document.querySelector('#menu-icon');
let navLink = document.querySelector('.nav-link');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon when menu opens
    navLink.classList.toggle('active'); // Show/hide nav links
};
