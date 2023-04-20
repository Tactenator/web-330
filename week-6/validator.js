import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    constructor(name, field, min) {
        this.name = name; 
        this.field = field
        this.min = min; 
        this.validators = [];
        this.messages = []
    }

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, Number(this.field)))
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, Number(this.field)))
    }

    addFloatMinField() {
        this.validators.push(new FloatMinField(this.name, Number(this.field)))
    }

    addFloatMaxField() {
        this.validators.push(new FloatMaxField(this.name, Number(this.field)))
    }

    validate() {
        for(let item of this.validators) {
            
            if(!item.validate()) {
                this.messages.push(item.getMessage()) 
                return false; 
            }
        }
        return true; 
    }
}