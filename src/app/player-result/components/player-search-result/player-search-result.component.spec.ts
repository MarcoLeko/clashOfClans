import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchResultComponent} from './player-search-result.component';
import {LoadingScreenComponent} from '../../../shared/components/loading-screen/loading-screen.component';
import {ErrorSearchResultComponent} from '../../../shared/components/error-search-result/error-search-result.component';
import {PlayerSearchStatsComponent} from '../player-search-stats/player-search-stats.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {HashTransformerService} from '../../../shared/services/hash-transformer/hash-transformer.service';
import {PlayerSearchService} from '../../../shared/services/player-search/player-search.service';
import {ActivatedRouteStub} from '../../../testing/activatedroute-stub';
import {Mocks} from '../../../testing/mocks';
import {PlayerSearchStatsHeaderComponent} from '../player-search-stats/player-search-stats-header/player-search-stats-header.component';
import {PlayerSearchStatsBodyComponent} from '../player-search-stats/player-search-stats-body/player-search-stats-body.component';
import {AchievementComponent} from '../player-search-stats/player-search-stats-body/achievement/achievement.component';
import {AccordionModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {ClanStatsComponent} from '../player-search-stats/player-search-stats-body/clan-stats/clan-stats.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {AgGridModule} from 'ag-grid-angular';
import {RoleTypePipe} from '../../../shared/pipes/role-type/role-type.pipe';
import {TroopsAndSpellsComponent} from '../player-search-stats/player-search-stats-body/troops-and-spells/troops-and-spells.component';

describe('PlayerSearchResultComponent', () => {
  let component: PlayerSearchResultComponent;
  let fixture: ComponentFixture<PlayerSearchResultComponent>;

  const playerSearchMock = {
    getPlayerByPlayerTag: jasmine.createSpy('getPlayerByPlayerTag')
  };
  const clanSearchSpy = {
    getClanByClanTag: jasmine.createSpy('getClanByClanTag')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        AccordionModule.forRoot(),
        HttpClientModule,
        Angular2FontawesomeModule,
        AgGridModule.withComponents([])
      ],
      providers: [
        HashTransformerService,
        {provide: ClanSearchService, useValue: clanSearchSpy},
        {provide: PlayerSearchService, useValue: playerSearchMock},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ],
      declarations: [
        PlayerSearchResultComponent,
        LoadingScreenComponent,
        ErrorSearchResultComponent,
        PlayerSearchStatsComponent,
        PlayerSearchStatsHeaderComponent,
        PlayerSearchStatsBodyComponent,
        AchievementComponent,
        TroopsAndSpellsComponent,
        ClanStatsComponent,
        RoleTypePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch value from the url', () => {
    const expectedParameter = 'expectedSearchValue';

    const params: Params = {
      playerId: expectedParameter
    };
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    route.params = Observable.of(params);

    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.throw({}));
    clanSearchSpy.getClanByClanTag.and.returnValue(Observable.of(Mocks.CLANSTATSBYCLANTAG));

    component.ngOnInit();

    expect(component.searchValue).toEqual(expectedParameter);
  });

  it('should set player stats by valid webservice call', () => {
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    route.params = Observable.of({});

    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.of(Mocks.PLAYERSTATSBYPLAYERTAG));
    clanSearchSpy.getClanByClanTag.and.returnValue(Observable.of(Mocks.CLANSTATSBYCLANTAG));

    component.ngOnInit();

    expect(component.playerResult).toEqual(Mocks.PLAYERSTATSBYPLAYERTAG);
  });

  it('should set loading property by false if webservice call finished', () => {
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    route.params = Observable.of({});

    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.of(Mocks.PLAYERSTATSBYPLAYERTAG));
    component.ngOnInit();

    expect(component.isLoading).toBe(false);
  });

  it('should set no result property by true if webservice call failed', () => {
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    route.params = Observable.of({});

    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.throw({}));
    component.ngOnInit();

    expect(component.hasNoResultFound).toBe(true);
  });

  it('should call clanSearch mock on init', () => {
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    route.params = Observable.of({});

    component.playerResult = Mocks.PLAYERSTATSBYPLAYERTAG;
    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.of(Mocks.PLAYERSTATSBYPLAYERTAG));
    const calledSpy = clanSearchSpy.getClanByClanTag.and.returnValue(Observable.of(Mocks.CLANSTATSBYCLANTAG));

    component.ngOnInit();

    expect(calledSpy).toHaveBeenCalledWith(component.playerResult.clan.tag);
    expect(component.clanInfo).toEqual(Mocks.CLANSTATSBYCLANTAG);
  });

  it('should not call clanSearch mock on init', () => {
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    route.params = Observable.of({});

    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.of(Mocks.PLAYERSTATSBYPLAYERTAGWITHOUTCLAN));
    const notCalledSpy = clanSearchSpy.getClanByClanTag.and.stub();

    component.ngOnInit();

    expect(notCalledSpy.calls.mostRecent()).not.toEqual(notCalledSpy);
  });
});
