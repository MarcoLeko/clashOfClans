import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchStatsHeaderComponent } from './player-search-stats-header.component';

describe('PlayerSearchStatsHeaderComponent', () => {
  let component: PlayerSearchStatsHeaderComponent;
  let fixture: ComponentFixture<PlayerSearchStatsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearchStatsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchStatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
