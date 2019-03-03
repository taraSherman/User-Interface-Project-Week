
const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('.menu-open');
const hamburger = document.querySelector('.menu-inactive');



const showMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menuOpen.classList.toggle('menu--open');
    hamburger.classList.toggle('visible');
    event.stopPropagation;
};

// const hideMenu = () => {
//     menu.classList.toggle()('menu--closed');
//     hamburger.classList.toggle('visible');
//     event.stopPropagation
// }


// Using your menuOpen reference, add a click handler that calls toggleMenu
menuOpen.addEventListener('click', showMenu);
// hamburger.addEventListener('click', hideMenu);
