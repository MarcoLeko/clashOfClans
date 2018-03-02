import {PlayerHashValidationDirective} from './playerHashValidation.directive';
import {TestBed} from '@angular/core/testing';
import {FormControl} from "@angular/forms";

describe('Component: Login', () => {

  let directive;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PlayerHashValidationDirective
      ],
      declarations: [
        PlayerHashValidationDirective
      ]
    });

    directive = TestBed.get(PlayerHashValidationDirective);
  });

  it('should initialize', () => {
    expect(directive).not.toBeUndefined();
  });

  it('should should be valid with hash', () => {

    const testFormControl: FormControl = new FormControl();
    testFormControl.setValue('#lffhdflsköj');

    expect(directive.validate(testFormControl)).toBeNull();
  });

  it('should should be valid with null', () => {

    const testFormControl: FormControl = new FormControl();
    testFormControl.setValue(null);

    expect(directive.validate(testFormControl)).toBeNull();
  });

  it('should should be invalid', () => {

    const testFormControl: FormControl = new FormControl();
    testFormControl.setValue('lffhdflsköj');

    expect(directive.validate(testFormControl)).toEqual({playerId: Object({valid: false})});
  });
});
