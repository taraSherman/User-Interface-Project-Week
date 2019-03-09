// JS goes here
class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;

        this.cards = document.querySelectorAll(`.toggle[data-tab='${this.tabData}']`)

        this.cards = Array.from(this.cards).map(card => new TabCard(card));
        this.tabElement.addEventListener(`click`, () => this.selectTab());
    }

    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(item => item.classList.remove('active-tab'));

        const cards = document.querySelectorAll('.toggle');
        cards.forEach(item => (item.style.display = "none"));

        this.tabElement.classList.add('active-tab');
        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement) {
        this.cardElement = cardElement;
    }
    selectCard() {
        this.cardElement.style.display = 'flex';
    }
}
let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));

this.cards = document.querySelectorAll(`.about-card[data-tab='${this.tabData}']`);