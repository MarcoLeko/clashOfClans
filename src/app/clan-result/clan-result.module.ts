import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClanSearchResultComponent} from './components/clan-search-result/clan-search-result.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ClanSearchStatsComponent} from './components/clan-search-stats/clan-search-stats.component';
import {ClanSearchStatsHeaderComponent} from './components/clan-search-stats/clan-search-stats-header/clan-search-stats-header.component';
import {ClanSearchStatsBodyComponent} from './components/clan-search-stats/clan-search-stats-body/clan-search-stats-body.component';
import {FormsModule} from '@angular/forms';
import {IsWarLogPublicPipe} from './pipes/is-war-log-public/is-war-log-public.pipe';
import {WarPieChartComponent} from './components/clan-search-stats/clan-search-stats-body/war-pie-chart/war-pie-chart.component';
import {ClanMemberOverviewComponent} from './components/clan-search-stats/clan-search-stats-body/clan-member-overview/clan-member-overview.component';
import {ChartsModule} from 'ng2-charts';
import {CompleteClanMemberStatsService} from './services/complete-clan-member-stats/complete-clan-member-stats.service';
import {TrophiesNightCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {TrophiesHomeCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {AgGridModule} from 'ag-grid-angular';
import {LeagueBadgeCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/league-badge-cell-renderer.component';
import {RoleCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/role-cell-renderer-component';
import {TownhallPictureCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/townhall-picture-cell-renderer.component';
import {WarStarsCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/war-stars-cell-renderer.component';
import {UiSwitchModule} from 'angular2-ui-switch';

const appRoutes: Routes = [
  {path: 'clanSearch/:clanId', component: ClanSearchResultComponent, data: {depth: 3}}
];

@NgModule({
  declarations: [
    ClanSearchResultComponent,
    ClanSearchStatsComponent,
    ClanSearchStatsHeaderComponent,
    ClanSearchStatsBodyComponent,
    IsWarLogPublicPipe,
    WarPieChartComponent,
    ClanMemberOverviewComponent
  ],
  imports: [
    AgGridModule.withComponents([
      TrophiesHomeCellRendererComponent,
      TrophiesNightCellRendererComponent,
      LeagueBadgeCellRendererComponent,
      RoleCellRendererComponent,
      TownhallPictureCellRendererComponent,
      WarStarsCellRendererComponent
    ]),
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    UiSwitchModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  providers: [
    CompleteClanMemberStatsService
  ],
  exports: [
    IsWarLogPublicPipe
  ]
})

export class ClanResultModule {
}
