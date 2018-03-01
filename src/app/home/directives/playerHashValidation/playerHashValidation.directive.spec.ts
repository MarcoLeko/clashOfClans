import { PlayerHashValidationDirective } from './playerHashValidation.directive';
import { TestBed } from '@angular/core/testing';

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
});
