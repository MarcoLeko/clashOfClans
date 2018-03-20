import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSearchResultComponent } from './components/player-search-result/player-search-result.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { PlayerSearchStatsComponent } from './components/player-search-stats/player-search-stats.component';
import { ErrorSearchResultComponent } from './components/error-search-result/error-search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlayerSearchService } from './services/player-search/player-search.service';
import { PlayerSearchStatsHeaderComponent } from './components/player-search-stats/player-search-stats-header/player-search-stats-header.component';
import { PlayerSearchStatsBodyComponent } from './components/player-search-stats/player-search-stats-body/player-search-stats-body.component';
import { HeroMapperService } from './services/hero-mapper/hero-mapper.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule, ProgressbarModule } from 'ngx-bootstrap';
import { AchievementModalComponent } from './components/player-search-stats/player-search-stats-body/achievement-modal/achievement-modal/achievement-modal.component';
import { BuilderInfoService } from './services/builder-info/builder-info.service';

const appRoutes: Routes = [
  {path: 'search/:playerId', component: PlayerSearchResultComponent}
];

@NgModule({
  declarations: [
    PlayerSearchResultComponent,
    LoadingScreenComponent,
    PlayerSearchStatsComponent,
    ErrorSearchResultComponent,
    PlayerSearchStatsHeaderComponent,
    PlayerSearchStatsBodyComponent,
    AchievementModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    AngularFontAwesomeModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      appRoutes
    )],
  providers: [
    HttpClientModule,
    PlayerSearchService,
    HeroMapperService,
    BuilderInfoService
  ],
  exports: []
})
export class PlayerResultModule {
}
