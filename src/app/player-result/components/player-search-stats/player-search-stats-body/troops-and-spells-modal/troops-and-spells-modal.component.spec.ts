import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsModalComponent} from './troops-and-spells-modal.component';

describe('TroopsAndSpellsModalComponent', () => {
  let component: TroopsAndSpellsModalComponent;
  let fixture: ComponentFixture<TroopsAndSpellsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroopsAndSpellsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopsAndSpellsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
