import {Directive} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appHasPlayerHash] [ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PlayerHashValidationDirective, multi: true}
  ]
})

export class PlayerHashValidationDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = hasHashValueValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}

export function hasHashValueValidator(): ValidatorFn {
  return (control: AbstractControl) => {

    if (control.value !== null) {
      if (control.value.startsWith('#')) {
        return null;
      } else {
        return {
          playerId: {
            valid: false
          }
        };
      }
    }
    return null;
  };
}
