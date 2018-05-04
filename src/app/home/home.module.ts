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
import {LocationSearchService} from './services/location-search/location-search.service';
import {MatSliderModule} from '@angular/material/slider';
import {WarFrequencyPipe} from './pipes/war-frequency.pipe';

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
    WarFrequencyPipe
  ],
  imports: [
    MatSliderModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PlayerResultModule,
    RouterModule.forChild(
      appRoutes
    )],
  providers: [
    LocationSearchService
  ],
  exports: []
})
export class HomeModule {
}
