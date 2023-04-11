/*
    ==================
    Title: cart-component.js, 
    Author: Trevor McLaurine
    Date: 4/11/2023
    Description: Creates the cart component div.  
*/

class CartComponent extends HTMLElement {
    constructor(){
        super();
        }
        connectedCallback() {
            this.innerHTML = 
            `
                <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
            `;
        }
}

customElements.define('cart-component', CartComponent)