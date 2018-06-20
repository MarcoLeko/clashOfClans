import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClanSearchStatsBodyComponent} from './clan-search-stats-body.component';
import {ClanMemberOverviewComponent} from './clan-member-overview/clan-member-overview.component';
import {WarPieChartComponent} from './war-pie-chart/war-pie-chart.component';
import {ChartsModule} from 'ng2-charts';
import {AgGridModule} from 'ag-grid-angular';
import {UiSwitchModule} from 'ngx-ui-switch';
import {Router} from '@angular/router';
import {CompleteClanMemberStatsService} from '../../../services/complete-clan-member-stats/complete-clan-member-stats.service';

describe('ClanSearchStatsBodyComponent', () => {
  let component: ClanSearchStatsBodyComponent;
  let fixture: ComponentFixture<ClanSearchStatsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([]),
        UiSwitchModule,
        ChartsModule
      ],
      providers: [
        {provide: Router},
        {provide: CompleteClanMemberStatsService}
      ],
      declarations: [
        ClanSearchStatsBodyComponent,
        ClanMemberOverviewComponent,
        WarPieChartComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanSearchStatsBodyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
