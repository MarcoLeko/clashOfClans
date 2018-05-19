import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClanSearchResultComponent} from './components/clan-search-result/clan-search-result.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'clanSearch/:clanId', component: ClanSearchResultComponent, data: {depth: 3}}
];

@NgModule({
  declarations: [
    ClanSearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class ClanResultModule {
}
