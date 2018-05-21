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
import {CapitalizeFirstPipe} from './pipes/capitalize-first/capitalize-first.pipe';

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
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class ClanResultModule {
}
