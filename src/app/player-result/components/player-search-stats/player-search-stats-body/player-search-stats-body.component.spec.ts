import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsBodyComponent} from './player-search-stats-body.component';
import {Mocks} from '../../../../testing/mocks';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../../../shared/shared.module';
import {AchievementModalComponent} from './achievement-modal/achievement-modal/achievement-modal.component';
import {AccordionModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../services/builder-info/builder-info.service';
import {ClanModalComponent} from './clan-modal/clan-modal.component';
import {CurrentSeasonModalComponent} from './current-season-modal/current-season-modal.component';
import {Router} from '@angular/router';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {FirebaseStorageMock} from '../../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {TroopsAndSpellsModalComponent} from './troops-and-spells-modal/troops-and-spells-modal.component';
import {TroopsHomeAttackStatsService} from '../../../services/troops-and-spells-mapper/home/troops-home-attack-stats.service';

describe('PlayerSearchStatsBodyComponent', () => {
  let component: PlayerSearchStatsBodyComponent;
  let fixture: ComponentFixture<PlayerSearchStatsBodyComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        AccordionModule.forRoot(),
        Angular2FontawesomeModule
      ],
      providers: [
        {provide: Router},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock},
        {provide: TroopsHomeAttackStatsService},
        BuilderInfoService
      ],
      declarations: [
        PlayerSearchStatsBodyComponent,
        AchievementModalComponent,
        ClanModalComponent,
        CurrentSeasonModalComponent,
        TroopsAndSpellsModalComponent
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

    const debugElement = fixture.debugElement.query(By.css('#cardDescriptionAchievements'));

    const expectedTextByFirstParagraph = 'Have a look about war stars, best trophies';
    const nativeElement = debugElement.nativeElement;

    expect(nativeElement.textContent).toMatch(expectedTextByFirstParagraph);
  });
});
