import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrentSeasonModalComponent} from './current-season-modal.component';

describe('CurrentSeasonModalComponent', () => {
  let component: CurrentSeasonModalComponent;
  let fixture: ComponentFixture<CurrentSeasonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSeasonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSeasonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
