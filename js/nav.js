function toggleNavOpen() {
    navOpen.classList.toggle('hidden');
}

const navOpen = document.querySelector('.nav__container-open');
console.log(navOpen);
const closeBtn = document.querySelector('.closed');
console.log(closeBtn);
const openBtn = document.querySelector('.open')
console.log(openBtn);

closeBtn.addEventListener('click', () => {
    toggleNavOpen();
});

function toggleNavClosed() {
    navOpen.classList.toggle('hidden');
}


openBtn.addEventListener('click', () => {
    toggleNavOpen();
});