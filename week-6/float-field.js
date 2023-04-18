export class FloatField {
    constructor(name, field) {
        this.name = name; 
        this.field = field; 
    }

    validate() {
        return this.field.isNaN(); 
    }

    getMessage() {
        return "<name> must be a float field. You entered <field>";
    }
}