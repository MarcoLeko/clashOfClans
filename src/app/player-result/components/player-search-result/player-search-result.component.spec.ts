import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchResultComponent} from './player-search-result.component';
import {LoadingScreenComponent} from '../loading-screen/loading-screen.component';
import {ErrorSearchResultComponent} from '../error-search-result/error-search-result.component';
import {PlayerSearchStatsComponent} from '../player-search-stats/player-search-stats.component';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {HashTransformerService} from '../../../shared/services/hash-transformer/hash-transformer.service';
import {PlayerSearchService} from '../../services/player-search/player-search.service';
import {ActivatedRouteStub} from '../../../testing/activatedroute-stub';
import {Mocks} from '../../../testing/mocks';
import {PlayerSearchStatsHeaderComponent} from '../player-search-stats/player-search-stats-header/player-search-stats-header.component';
import {PlayerSearchStatsBodyComponent} from '../player-search-stats/player-search-stats-body/player-search-stats-body.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AchievementModalComponent} from '../player-search-stats/player-search-stats-body/achievement-modal/achievement-modal/achievement-modal.component';
import {ModalModule, ProgressbarModule} from 'ngx-bootstrap';

describe('PlayerSearchResultComponent', () => {
  let component: PlayerSearchResultComponent;
  let fixture: ComponentFixture<PlayerSearchResultComponent>;

  const playerSearchMock = {
    getPlayerByPlayerTag: jasmine.createSpy('getPlayerByPlayerTag')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        HttpClientModule,
        AngularFontAwesomeModule
      ],
      providers: [
        HashTransformerService,
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
        AchievementModalComponent
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

    component.ngOnInit();

    expect(component.searchValue).toEqual(expectedParameter);
  });

  it('should set player stats by valid webservice call', () => {
    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.of(Mocks.PLAYERSTATSBYPLAYERTAG));
    component.ngAfterViewInit();

    expect(component.playerResult).toEqual(Mocks.PLAYERSTATSBYPLAYERTAG);
  });

  it('should set loading property by false if webservice call finished', () => {
    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.of(Mocks.PLAYERSTATSBYPLAYERTAG));
    component.ngAfterViewInit();

    expect(component.isLoading).toBe(false);
  });

  it('should set no result property by true if webservice call failed', () => {
    playerSearchMock.getPlayerByPlayerTag.and.returnValue(Observable.throw({}));
    component.ngAfterViewInit();

    expect(component.hasNoResultFound).toBe(true);
  });
});
