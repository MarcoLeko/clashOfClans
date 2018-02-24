import {NgModule} from '@angular/core';
import {HomeFontPageComponent} from './components/home-fontpage/home-font-page.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeDescriptionComponent} from './components/home-description/home-description.component';
import {PlayerSearchComponent} from './components/player-search/player-search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderInterceptorService} from "./services/header-interceptor/header-interceptor.service";
import {PlayerSearchService} from "./services/player-search/player-search.service";
import {SharedModule} from "../shared/shared.module";

const appRoutes: Routes = [
  { path: '', component: HomeFontPageComponent }
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    HomeDescriptionComponent,
    PlayerSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
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
