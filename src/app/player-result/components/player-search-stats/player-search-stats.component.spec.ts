import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsComponent} from './player-search-stats.component';
import {PlayerSearchStatsHeaderComponent} from './player-search-stats-header/player-search-stats-header.component';
import {PlayerSearchStatsBodyComponent} from './player-search-stats-body/player-search-stats-body.component';
import {SharedModule} from '../../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {Mocks} from '../../../testing/mocks';
import {AchievementComponent} from './player-search-stats-body/achievement/achievement.component';
import {AccordionModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {ClanStatsComponent} from './player-search-stats-body/clan-stats/clan-stats.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {AgGridModule} from 'ag-grid-angular';
import {TroopsAndSpellsComponent} from './player-search-stats-body/troops-and-spells/troops-and-spells.component';

describe('PlayerSearchStatsComponent', () => {
  let component: PlayerSearchStatsComponent;
  let fixture: ComponentFixture<PlayerSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        Angular2FontawesomeModule,
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        AccordionModule.forRoot(),
        AgGridModule.withComponents([])
      ],
      declarations: [
        PlayerSearchStatsComponent,
        PlayerSearchStatsHeaderComponent,
        PlayerSearchStatsBodyComponent,
        AchievementComponent,
        ClanStatsComponent,
        TroopsAndSpellsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchStatsComponent);
    component = fixture.componentInstance;
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
