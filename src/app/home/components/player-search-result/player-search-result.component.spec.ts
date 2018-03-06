import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchResultComponent } from './player-search-result.component';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';
import { ErrorSearchResultComponent } from '../error-search-result/error-search-result.component';
import { PlayerSearchStatsComponent } from '../player-search-stats/player-search-stats.component';
import { PlayerSearchService } from '../../services/player-search/player-search.service';
import { HttpClientModule } from '@angular/common/http';
import { HashTransformerService } from '../../../shared/domain/hash-transformer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ActivatedRouteStub } from '../../../testing/activatedroute-stub';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('PlayerSearchResultComponent', () => {
  let component: PlayerSearchResultComponent;
  let fixture: ComponentFixture<PlayerSearchResultComponent>;

  const playerSearchMock = {
    getPlayer() {
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
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
        PlayerSearchStatsComponent
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
    const route = fixture.debugElement.injector.get(ActivatedRoute);
    const params: Params = {playerId: expectedParameter};
    route.params = Observable.of(params);

    const playerSearch = fixture.debugElement.injector.get(PlayerSearchService);
    spyOn<any>(playerSearch, 'getPlayer').and.returnValue(Observable.of([]));

    component.ngOnInit();

    expect(component.searchValue).toEqual(expectedParameter);
  });
});
