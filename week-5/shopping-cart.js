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

    showItems() {
        let items; 
        for(const item of this.products) {
            items += item
        }
        return items; 
    }
}