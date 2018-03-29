import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsBodyComponent} from './player-search-stats-body.component';
import {Mocks} from '../../../../testing/mocks';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../../../shared/shared.module';
import {AchievementModalComponent} from './achievement-modal/achievement-modal/achievement-modal.component';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../services/builder-info/builder-info.service';
import {ClanModalComponent} from './clan-modal/clan-modal.component';
import {CurrentSeasonModalComponent} from './current-season-modal/current-season-modal.component';
import {Router} from '@angular/router';

describe('PlayerSearchStatsBodyComponent', () => {
  let component: PlayerSearchStatsBodyComponent;
  let fixture: ComponentFixture<PlayerSearchStatsBodyComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ModalModule.forRoot(),
        ProgressbarModule.forRoot()
      ],
      providers: [
        {provide: Router},
        BuilderInfoService
      ],
      declarations: [
        PlayerSearchStatsBodyComponent,
        AchievementModalComponent,
        ClanModalComponent,
        CurrentSeasonModalComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchStatsBodyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;

    const debugElement = fixture.debugElement.query(By.css('p'));

    const expectedTextByFirstParagraph = 'Have a look about war stars, best trophies';
    const nativeElement = debugElement.nativeElement;

    expect(nativeElement.textContent).toMatch(expectedTextByFirstParagraph);
  });
});
