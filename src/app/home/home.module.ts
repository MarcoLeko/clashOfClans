import {NgModule} from '@angular/core';
import {HomeFontPageComponent} from './components/home-fontpage/home-font-page.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {PlayerSearchComponent} from './components/player-search/player-search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderInterceptorService} from "./services/header-interceptor/header-interceptor.service";
import {PlayerSearchService} from "./services/player-search/player-search.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: '', component: HomeFontPageComponent }
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    JumbotronComponent,
    PlayerSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
