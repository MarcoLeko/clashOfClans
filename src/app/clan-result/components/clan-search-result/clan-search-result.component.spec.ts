import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchResultComponent} from './clan-search-result.component';
import {LoadingScreenComponent} from '../../../shared/components/loading-screen/loading-screen.component';
import {ErrorSearchResultComponent} from '../../../shared/components/error-search-result/error-search-result.component';
import {ClanSearchStatsComponent} from '../clan-search-stats/clan-search-stats.component';
import {ClanSearchStatsBodyComponent} from '../clan-search-stats/clan-search-stats-body/clan-search-stats-body.component';
import {ClanSearchStatsHeaderComponent} from '../clan-search-stats/clan-search-stats-header/clan-search-stats-header.component';
import {ClanMemberOverviewComponent} from '../clan-search-stats/clan-search-stats-body/clan-member-overview/clan-member-overview.component';
import {WarPieChartComponent} from '../clan-search-stats/clan-search-stats-body/war-pie-chart/war-pie-chart.component';
import {IsWarLogPublicPipe} from '../../pipes/is-war-log-public/is-war-log-public.pipe';
import {EnterTypePipe} from '../../../shared/pipes/enter-type/enter-type.pipe';
import {WarFrequencyPipe} from '../../../shared/pipes/war-frequency/war-frequency.pipe';
import {AgGridModule} from 'ag-grid-angular';
import {UiSwitchModule} from 'ngx-ui-switch';
import {ChartsModule} from 'ng2-charts';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {ActivatedRoute} from '@angular/router';
import {ActivatedRouteStub} from '../../../testing/activatedroute-stub';

describe('ClanSearchResultComponent', () => {
  let component: ClanSearchResultComponent;
  let fixture: ComponentFixture<ClanSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([]),
        UiSwitchModule,
        ChartsModule
      ],
      providers: [
        {provide: ClanSearchService},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ],
      declarations: [
        ClanSearchResultComponent,
        LoadingScreenComponent,
        ErrorSearchResultComponent,
        ClanSearchStatsComponent,
        ClanSearchStatsBodyComponent,
        ClanSearchStatsHeaderComponent,
        ClanMemberOverviewComponent,
        WarPieChartComponent,
        IsWarLogPublicPipe,
        EnterTypePipe,
        WarFrequencyPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
