import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchStatsBodyComponent} from './player-search-stats-body.component';
import {Mocks} from '../../../../testing/mocks';
import {By} from '@angular/platform-browser';
import {ClanSearchService} from '../../../../shared/services/clan-search/clan-search.service';
import {Observable} from 'rxjs/Observable';
import {SharedModule} from '../../../../shared/shared.module';
import {AchievementModalComponent} from './achievement-modal/achievement-modal/achievement-modal.component';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../services/builder-info/builder-info.service';

describe('PlayerSerchStatsBodyComponent', () => {
  let component: PlayerSearchStatsBodyComponent;
  let fixture: ComponentFixture<PlayerSearchStatsBodyComponent>;

  const clanSearchSpy = {
    getClanByClanTag: jasmine.createSpy('getClanByClanTag')
  };

  const builderInfoSpy = {
    getBuilderInfoType: jasmine.createSpy('getBuilderInfoType')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ModalModule.forRoot(),
        ProgressbarModule.forRoot()
      ],
      providers: [
        {provide: ClanSearchService, useValue: clanSearchSpy},
        {provide: BuilderInfoService, useValue: builderInfoSpy}
      ],
      declarations: [
        PlayerSearchStatsBodyComponent,
        AchievementModalComponent
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

  it('should call clanSearch mock on init', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    const calledSpy = clanSearchSpy.getClanByClanTag.and.returnValue(Observable.of(Mocks.CLANSTATSBYCLANTAG));
    builderInfoSpy.getBuilderInfoType.and.returnValue(Mocks.BUILDERINFOMOCK);

    fixture.detectChanges();

    expect(calledSpy).toHaveBeenCalledWith(component.playerResult.clan.tag);
    expect(component.clanInfo).toEqual(Mocks.CLANSTATSBYCLANTAG);
  });

  it('should not call clanSearch mock on init', () => {
    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAGWITHOUTCLAN;
    const notCalledSpy = clanSearchSpy.getClanByClanTag.and.stub();
    builderInfoSpy.getBuilderInfoType.and.returnValue(Mocks.BUILDERINFOMOCK);

    fixture.detectChanges();

    expect(notCalledSpy.calls.mostRecent()).not.toEqual(notCalledSpy);
  });
});
