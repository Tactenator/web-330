/*
    ==================
    Title: shopping-cart.js, 
    Author: Trevor McLaurine
    Date: 4/11/2023
    Description: Creates the functions needed for the shopping cart
*/

export class ShoppingCart {
    constructor() {
        this.products = []
    }

    count () {
        return this.products.length; 
    }

    add (e) {
        this.products.push(e)
    }

    items(id, name, price) { 
        let newItem = [id, name, price]
        let newRow = document.createElement('tr');
        for(const item of newItem) {
            let newData = document.createElement('td');
            newData.innerHTML= item; 
            newRow.appendChild(newData)
        }
        return newRow; 
    }
}