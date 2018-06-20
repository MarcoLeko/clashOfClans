import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultComponent} from './search-result.component';
import {SearchResultBodyComponent} from '../search-result-body/search-result-body.component';
import {ErrorSearchResultComponent} from '../../../shared/components/error-search-result/error-search-result.component';
import {LoadingScreenComponent} from '../../../shared/components/loading-screen/loading-screen.component';
import {IsWarLogPublicPipe} from '../../../clan-result/pipes/is-war-log-public/is-war-log-public.pipe';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {RoleTypePipe} from '../../../shared/pipes/role-type/role-type.pipe';
import {EnterTypePipe} from '../../../shared/pipes/enter-type/enter-type.pipe';
import {ActivatedRouteStub} from '../../../testing/activatedroute-stub';
import {ActivatedRoute} from '@angular/router';
import {PlayerOrClanResultService} from '../../services/player-or-clan-result/player-or-clan-result.service';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule
      ],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: PlayerOrClanResultService}
      ],
      declarations: [
        SearchResultComponent,
        SearchResultBodyComponent,
        ErrorSearchResultComponent,
        LoadingScreenComponent,
        IsWarLogPublicPipe,
        RoleTypePipe,
        EnterTypePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
