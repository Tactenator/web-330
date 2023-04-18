export class FloatMinField {
    constructor(name, field, min) {
        this.name = name; 
        this.field = field; 
        this.min = min; 
    }

    validate() {
        return this.field.parseFloat() > this.min; 
    }

    getMessage() {
        return `${this.name} must be less than ${this.min}. You entered ${this.field}`;
    }
}