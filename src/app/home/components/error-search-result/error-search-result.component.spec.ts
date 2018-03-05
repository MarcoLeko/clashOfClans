import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSearchResultComponent } from './error-search-result.component';

describe('ErrorSearchResultComponent', () => {
  let component: ErrorSearchResultComponent;
  let fixture: ComponentFixture<ErrorSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
