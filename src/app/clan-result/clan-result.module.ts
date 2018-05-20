import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClanSearchResultComponent} from './components/clan-search-result/clan-search-result.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ClanSearchStatsComponent} from './components/clan-search-stats/clan-search-stats.component';

const appRoutes: Routes = [
  {path: 'clanSearch/:clanId', component: ClanSearchResultComponent, data: {depth: 3}}
];

@NgModule({
  declarations: [
    ClanSearchResultComponent,
    ClanSearchStatsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class ClanResultModule {
}
