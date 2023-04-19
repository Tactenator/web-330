export class FloatMinField {
    constructor(name, field, min) {
        this.name = name; 
        this.field = field; 
        this.min = 100; 
    }

    validate() {
        console.log(this.min)
        return parseFloat(this.field) > this.min; 
    }

    getMessage() {
        return `${this.name} must be greater than ${this.min}. You entered ${this.field}`;
    }
}