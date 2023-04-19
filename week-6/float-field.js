export class FloatField {
    constructor(name, field) {
        this.name = name; 
        this.field = field; 
    }

    validate() {
        let newFloat = parseFloat(this.field)
        if(isNaN(newFloat)){
            return false
        }
        return true;
    }

    getMessage() {
        return  `${this.name} must be a float value. You entered ${this.field}`;
    }
}