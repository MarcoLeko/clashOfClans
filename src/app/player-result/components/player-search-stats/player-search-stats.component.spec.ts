import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchStatsComponent } from './player-search-stats.component';

describe('PlayerSearchStatsComponent', () => {
  let component: PlayerSearchStatsComponent;
  let fixture: ComponentFixture<PlayerSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearchStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
