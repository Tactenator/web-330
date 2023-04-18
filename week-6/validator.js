import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    constructor(name, field) {
        this.name = name; 
        this.field = field
        this.validators = [];
        this.messages = []
    }

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field))
        console.log(this.validators)
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field))
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min))
    }

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max))
    }

    validate() {
        for(let item of this.validators) {
            if(!item.validate()) {
                this.messages.push(item.getMessage()) 
                return false; 
            }
        }
    }
}