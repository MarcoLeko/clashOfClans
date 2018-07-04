import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsBodyComponent} from './player-search-stats-body.component';
import {Mocks} from '../../../../testing/mocks';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../../../shared/shared.module';
import {AchievementComponent} from './achievement/achievement.component';
import {AccordionModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../services/builder-info/builder-info.service';
import {ClanStatsComponent} from './clan-stats/clan-stats.component';
import {Router} from '@angular/router';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {FirebaseStorageMock} from '../../../../testing/firebase-storage-mock';
import {AngularFireStorage} from 'angularfire2/storage';
import {AgGridModule} from 'ag-grid-angular';
import {TroopsAndSpellsComponent} from './troops-and-spells/troops-and-spells.component';

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
        Angular2FontawesomeModule,
        AgGridModule.withComponents([])
      ],
      providers: [
        {provide: Router},
        {provide: AngularFireStorage, useClass: FirebaseStorageMock},
        BuilderInfoService
      ],
      declarations: [
        PlayerSearchStatsBodyComponent,
        AchievementComponent,
        ClanStatsComponent,
        TroopsAndSpellsComponent
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
