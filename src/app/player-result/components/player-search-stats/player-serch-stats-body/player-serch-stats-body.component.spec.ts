import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSerchStatsBodyComponent } from './player-serch-stats-body.component';

describe('PlayerSerchStatsBodyComponent', () => {
  let component: PlayerSerchStatsBodyComponent;
  let fixture: ComponentFixture<PlayerSerchStatsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSerchStatsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSerchStatsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
