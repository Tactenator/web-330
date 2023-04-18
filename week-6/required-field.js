export class RequiredField {
    constructor(name, field) {
        this.name = name; 
        this.field = field;
    }

    validate() {
        return Boolean(this.field); 
    }

    getMessage() {
        return "<name> is a required field."
    }
}