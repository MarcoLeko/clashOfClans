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
import {EnterTypePipe} from './pipes/enter-type/enter-type.pipe';
import {WarPieChartComponent} from './components/clan-search-stats/clan-search-stats-body/war-pie-chart/war-pie-chart.component';
import {ClanMemberOverviewComponent} from './components/clan-search-stats/clan-search-stats-body/clan-member-overview/clan-member-overview.component';
import {ChartsModule} from 'ng2-charts';
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
    EnterTypePipe,
    WarPieChartComponent,
    ClanMemberOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    UiSwitchModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class ClanResultModule {
}
