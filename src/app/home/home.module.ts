import {NgModule} from '@angular/core';
import {HomeFontPageComponent} from './components/home-fontpage/home-font-page.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {PlayerSearchComponent} from './components/player-search/player-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PlayerHashValidationDirective} from './directives/playerHashValidation/playerHashValidation.directive';
import {PlayerResultModule} from '../player-result/player-result.module';
import {SharedModule} from '../shared/shared.module';
import {ClanSearchComponent} from './components/clan-search/clan-search.component';
import {FooterComponent} from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: HomeFontPageComponent, data: {depth: 1}}
];

@NgModule({
  declarations: [
    HomeFontPageComponent,
    JumbotronComponent,
    PlayerSearchComponent,
    PlayerHashValidationDirective,
    ClanSearchComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PlayerResultModule,
    RouterModule.forChild(
      appRoutes
    )],
  providers: [],
  exports: []
})
export class HomeModule {
}
