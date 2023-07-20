/* side bar menu hamburger menu */
const menuToggle = document.querySelector('.menu-toggle input');
const navmenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    navmenu.classList.toggle('slide');
}) 

/* blur nav when scrolling */
const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('sticky', window.scrollY > 60);
})