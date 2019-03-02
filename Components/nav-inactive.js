






/*class NaviLink {
    constructor(element) {
        // Assign this.element to the passed-in DOM element
        this.element = element;

        // Get the custom data attribute on the Link
        this.data = this.element.dataset.navi;

        // Using the custom data attribute get the associated Item element
        this.itemElement = document.querySelector(`.navi-item[data-navi = '${this.data}']`);

        // Using the Item element, create a new instance of the NaviItem class
        this.naviItem = new NaviItem(this.itemElement);

        // Add a click event listener on this instance, calling the select method on click
        this.element.addEventListener('click', () => {
            this.select();
        });
    };

    select() {
        // Get all of the elements with the navi-link class
        const links = document.querySelectorAll('.navi-link');

        // Using a loop or the forEach method remove the 'navi-link-selected' class from all of the links
        Array.from(links).forEach(link => link.classList.remove('navi-link-selected'));

        // Add a class named "navi-link-selected" to this link
        this.element.classList.add('navi-link-selected');

        // Call the select method on the item associated with this link
        this.naviItem.select();
    }
};

class NaviItem {
    constructor(element) {
        // Assign this.element to the passed in element
        this.element = element;
    };

    select() {
        // Select all ".navi-item" elements from the DOM
        const items = document.querySelectorAll('.navi-item');

        // Remove the class "navi-item-selected" from each element
        Array.from(items).forEach(link => link.classList.remove('navi-item-selected'));

        // Add a class named "navi-item-selected" to this element
        this.element.classList.add('navi-item-selected');
    };
};

const links = document.querySelectorAll('.navi-link').forEach(link => new NaviLink(link));
*/