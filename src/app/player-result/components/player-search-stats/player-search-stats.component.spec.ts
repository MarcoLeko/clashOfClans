import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchStatsComponent } from './player-search-stats.component';
import { PlayerSearchStatsHeaderComponent } from './player-search-stats-header/player-search-stats-header.component';
import { TownhallPictureService } from '../../../shared/services/get-townhall-picture/townhall-picture.service';

describe('PlayerSearchStatsComponent', () => {
  let component: PlayerSearchStatsComponent;
  let fixture: ComponentFixture<PlayerSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TownhallPictureService
      ],
      declarations: [
        PlayerSearchStatsComponent,
        PlayerSearchStatsHeaderComponent
      ]
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
