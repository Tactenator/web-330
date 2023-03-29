export class Bill { 
    //initializes class and constructor
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = []
        this._appetizers = []
        this._mainCourses = [], 
        this._desserts = []
    }

    //pushes item choice to the constructor array
    addBeverage(beverage) {
        this._beverages.push(beverage)
    }

    addAppetizers(appetizer) {
        this._appetizers.push(appetizer)
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse)
    }

    addDesserts(desserts) {
        this._desserts.push(desserts)
    }

    //clears the array in the constructor. This prevents incorrect totals if user decides to add or remove items.
    clearArray() {
        this._appetizers.forEach((item) => {
            this._appetizers.shift(item)
        })

        this._beverages.forEach((item) => {
            this._beverages.shift(item)
        })

        this._mainCourses.forEach((item) => {
            this._mainCourses.shift(item)
        })

        this._appetizers.forEach((item) => {
            this._appetizers.shift(item)
        })
    }

    //gets the total of all the users choices
    getTotal() {
        let total = 0; 

        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price)
        })

        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price)
        })

        let appetizerTotal = this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price)
        })

        let dessertsTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price)
        })

        return total.toFixed(2); 
    }
}