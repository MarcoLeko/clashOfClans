import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsComponent} from './troops-and-spells.component';

describe('TroopsAndSpellsComponent', () => {
  let component: TroopsAndSpellsComponent;
  let fixture: ComponentFixture<TroopsAndSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroopsAndSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopsAndSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
