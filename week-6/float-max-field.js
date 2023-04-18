export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name; 
        this.field = field; 
        this.max = max; 
    }

    validate() {
        return this.field.parseFloat() < this.max; 
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}