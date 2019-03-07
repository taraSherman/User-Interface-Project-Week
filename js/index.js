
const menuInactive = document.querySelector('.menu-inactive');
console.log(menuInactive);
const menuOpen = document.querySelector('.menu-open');
console.log(menuOpen);
const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
const menuExpanded = document.querySelector('menu-expanded');
console.log(menuExpanded);
const menu = document.querySelector('.menu');
console.log(menu);
const menuClose = document.querySelector('.menu-close');
console.log(menuClose);
const menuX = document.querySelector('.menu-x');
console.log(menuX);

const showMenu = () => {
    menuOpen.classList.toggle('menu--open');
    hamburger.classList.toggle('visible');
    menuX.classList.toggle('visible');
    // event.stopPropagation;
}

const hideMenu = () => {
    menuClose.classList.toggle('menu--open');
    hamburger.classList.toggle('visible');
    menuX.classList.toggle('visible');
    // event.stopPropagation;
}


// Using your menuOpen reference, add a click handler that calls toggleMenu
hamburger.addEventListener('click', showMenu);
menuX.addEventListener('click', hideMenu);

