import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSearchResultComponent } from './components/player-search-result/player-search-result.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { PlayerSearchStatsComponent } from './components/player-search-stats/player-search-stats.component';
import { ErrorSearchResultComponent } from './components/error-search-result/error-search-result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlayerSearchService } from './services/player-search/player-search.service';
import { PlayerSearchStatsHeaderComponent } from './components/player-search-stats/player-search-stats-header/player-search-stats-header.component';

const appRoutes: Routes = [
  {path: 'search/:playerId', component: PlayerSearchResultComponent}
];

@NgModule({
  declarations: [
    PlayerSearchResultComponent,
    LoadingScreenComponent,
    PlayerSearchStatsComponent,
    ErrorSearchResultComponent,
    PlayerSearchStatsHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      appRoutes
    )],
  providers: [
    HttpClientModule,
    PlayerSearchService
  ],
  exports: []
})
export class PlayerResultModule {
}
