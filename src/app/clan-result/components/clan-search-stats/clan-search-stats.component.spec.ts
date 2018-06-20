import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchStatsComponent} from './clan-search-stats.component';
import {ClanSearchStatsHeaderComponent} from './clan-search-stats-header/clan-search-stats-header.component';
import {ClanSearchStatsBodyComponent} from './clan-search-stats-body/clan-search-stats-body.component';
import {IsWarLogPublicPipe} from '../../pipes/is-war-log-public/is-war-log-public.pipe';
import {EnterTypePipe} from '../../../shared/pipes/enter-type/enter-type.pipe';
import {WarFrequencyPipe} from '../../../shared/pipes/war-frequency/war-frequency.pipe';
import {WarPieChartComponent} from './clan-search-stats-body/war-pie-chart/war-pie-chart.component';
import {ClanMemberOverviewComponent} from './clan-search-stats-body/clan-member-overview/clan-member-overview.component';
import {ChartsModule} from 'ng2-charts';
import {AgGridModule} from 'ag-grid-angular';
import {UiSwitchModule} from 'ngx-ui-switch';

describe('ClanSearchStatsComponent', () => {
  let component: ClanSearchStatsComponent;
  let fixture: ComponentFixture<ClanSearchStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([]),
        UiSwitchModule,
        ChartsModule
      ],
      declarations: [
        ClanSearchStatsComponent,
        ClanSearchStatsHeaderComponent,
        ClanSearchStatsBodyComponent,
        WarPieChartComponent,
        ClanMemberOverviewComponent,
        EnterTypePipe,
        WarFrequencyPipe,
        IsWarLogPublicPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
