import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsComponent} from './player-search-stats.component';
import {PlayerSearchStatsHeaderComponent} from './player-search-stats-header/player-search-stats-header.component';
import {PlayerSearchStatsBodyComponent} from './player-search-stats-body/player-search-stats-body.component';
import {SharedModule} from '../../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {Mocks} from '../../../testing/mocks';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AchievementModalComponent} from './player-search-stats-body/achievement-modal/achievement-modal/achievement-modal.component';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {ClanModalComponent} from './player-search-stats-body/clan-modal/clan-modal.component';

describe('PlayerSearchStatsComponent', () => {
  let component: PlayerSearchStatsComponent;
  let fixture: ComponentFixture<PlayerSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        ModalModule.forRoot(),
        ProgressbarModule.forRoot()
      ],
      declarations: [
        PlayerSearchStatsComponent,
        PlayerSearchStatsHeaderComponent,
        PlayerSearchStatsBodyComponent,
        AchievementModalComponent,
        ClanModalComponent
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
