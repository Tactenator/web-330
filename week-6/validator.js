import { RequiredField } from "./required-field";
import { FloatField } from "./float-max-field";
import { FloatMinField } from "./float-min-field";
import { FloatMaxField } from "./float-max-field";

class Validator {
    validators = [];
    messages = []
    constructor(name, field) {}

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field))
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
                item.getMessage()
                return false;
            }
            return true; 
        }
    }
}