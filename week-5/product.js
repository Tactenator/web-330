/*
    ==================
    Title: product.js, 
    Author: Trevor McLaurine
    Date: 4/11/2023
    Description: Creates the product class 
*/

export class Product {
    constructor(name, price) {
        this.name = name; 
        this.price = price; 
        this.id = Math.random().toString(16).slice(2);
    }
}