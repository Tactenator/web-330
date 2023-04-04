import { FoodModel } from "./food-model.js";

export class CalorieConverter {
    constructor() {}
        data = [
            new FoodModel(1007, 'Egg', 78), 
            new FoodModel(1008, 'Apple', 95), 
            new FoodModel(1009, 'Hamburger', 354), 
            new FoodModel(1010, 'Fries', 400), 
            new FoodModel(1011, 'Banana', 105), 
            new FoodModel(1012, 'Soda', 150)
    ]

    find(e) {
        console.log(data)
        return data.find(item => item.name === e)
    }
        
    
}