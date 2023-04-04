/*
    ==================
    Title: mclaurine-calorie-converter.js, 
    Author: Trevor McLaurine
    Date: 4/4/2023
    Description: Creates calories converter and uses the food model class to construct data 
*/

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
    constructor() {}
        data = [
            new FoodModel(1007, 'egg', 78), 
            new FoodModel(1008, 'apple', 95), 
            new FoodModel(1009, 'hamburger', 354), 
            new FoodModel(1010, 'fries', 400), 
            new FoodModel(1011, 'banana', 105), 
            new FoodModel(1012, 'soda', 150)
    ]

    find(e) {
        return this.data.find(item => item.name === e)
    };
        
    
}