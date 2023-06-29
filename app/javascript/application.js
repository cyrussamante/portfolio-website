const hamburgerIcon = document.querySelector('.hamburger-menu');
const header = document.getElementById('header');
const body = document.getElementById('body');
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const closedIcon = document.querySelector('.closed-menu');

function toggleMenu(event) {
    event.preventDefault();
    hamburgerIcon.classList.toggle('active');
    closedIcon.classList.toggle('active');
    header.classList.toggle('active');
    body.classList.toggle('active');
    logo.classList.toggle('active');
    navLinks.classList.toggle('active');
    navbar.classList.toggle('active');
}

hamburgerIcon.addEventListener('click', toggleMenu);
closedIcon.addEventListener('click', toggleMenu);