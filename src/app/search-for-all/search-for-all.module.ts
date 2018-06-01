import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultBodyComponent} from './components/search-result-body/search-result-body.component';
import {PlayerOrClanResultService} from './services/player-or-clan-result/player-or-clan-result.service';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {ClanResultModule} from '../clan-result/clan-result.module';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';

const appRoutes: Routes = [
  {path: 'searchAll/:searchValue', component: SearchResultComponent, data: {depth: 3}}
];

@NgModule({
  declarations: [SearchResultComponent, SearchResultBodyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      appRoutes
    ),
    AngularFireStorageModule,
    ClanResultModule,
    Angular2FontawesomeModule
  ],
  providers: [
    PlayerOrClanResultService
  ],
  exports: []
})
export class SearchForAllModule {
}
