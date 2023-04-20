export class FloatMinField {
    constructor(name, field) {
        this.name = name; 
        this.field = field; 
        this.min = 100; 
    }

    validate() {
        return parseFloat(this.field) > this.min; 
    }

    getMessage() {
        return `${this.name} must be greater than ${this.min}. You entered ${this.field}`;
    }
}