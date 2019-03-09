class NavButton {
    constructor(element) {
        this.element = element;
        this.navItems = document.querySelector(".nav-tags");
        // console.log(this.navItems)
        this.element.addEventListener('click', () => this.handleClick());
    }
    handleClick() {
        document.querySelectorAll('.navigation-button').forEach(element => element.classList.toggle('active'));
        this.navItems.classList.toggle('hidden')
    }
}

const menuButton = document.querySelectorAll(".navigation-button").forEach(button => new NavButton(button));