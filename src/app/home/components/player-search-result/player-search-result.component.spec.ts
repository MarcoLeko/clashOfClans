import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSearchResultComponent} from './player-search-result.component';
import {LoadingScreenComponent} from "../loading-screen/loading-screen.component";
import {ErrorSearchResultComponent} from "../error-search-result/error-search-result.component";
import {PlayerSearchStatsComponent} from "../player-search-stats/player-search-stats.component";
import {PlayerSearchService} from "../../services/player-search/player-search.service";
import {HttpClientModule} from "@angular/common/http";
import {HashTransformerService} from "../../../shared/domain/hash-transformer.service";
import {ActivatedRoute} from "@angular/router";

describe('PlayerSearchResultComponent', () => {
  let component: PlayerSearchResultComponent;
  let fixture: ComponentFixture<PlayerSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        PlayerSearchService,
        HashTransformerService,
        {provide: ActivatedRoute}
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
});
