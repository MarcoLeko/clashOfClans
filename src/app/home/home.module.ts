import {NgModule} from '@angular/core';
import {HomeFontPageComponent} from './components/home-fontpage/home-font-page.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {PlayerSearchComponent} from './components/player-search/player-search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptorService} from './services/header-interceptor/header-interceptor.service';
import {PlayerSearchService} from './services/player-search/player-search.service';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerHashValidationDirective} from './directives/playerHashValidation/playerHashValidation.directive';
import {PlayerResultComponent} from './components/player-search-result/player-search-result.component';
import {LoadingScreenComponent} from './components/loading-screen/loading-screen.component';
import {ErrorSearchResultComponent} from './components/error-search-result/error-search-result.component';
import {PlayerSearchStatsComponent} from './components/player-search-stats/player-search-stats.component';

const appRoutes: Routes = [
  {path: '', component: HomeFontPageComponent},
  {path: 'search/:playerId', component: PlayerResultComponent}
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    JumbotronComponent,
    PlayerSearchComponent,
    PlayerHashValidationDirective,
    PlayerResultComponent,
    LoadingScreenComponent,
    ErrorSearchResultComponent,
    PlayerSearchStatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )],
  providers: [
    HttpClientModule,
    PlayerSearchService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true
    }],
  exports: []
})
export class HomeModule {
}
