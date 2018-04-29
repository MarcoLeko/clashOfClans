import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerSearchResultComponent} from './components/player-search-result/player-search-result.component';
import {PlayerSearchStatsComponent} from './components/player-search-stats/player-search-stats.component';
import {ErrorSearchResultComponent} from './components/error-search-result/error-search-result.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PlayerSearchService} from './services/player-search/player-search.service';
import {PlayerSearchStatsHeaderComponent} from './components/player-search-stats/player-search-stats-header/player-search-stats-header.component';
import {PlayerSearchStatsBodyComponent} from './components/player-search-stats/player-search-stats-body/player-search-stats-body.component';
import {HeroMapperService} from './services/hero-mapper/hero-mapper.service';
import {AccordionModule, ModalModule, ProgressbarModule} from 'ngx-bootstrap';
import {AchievementModalComponent} from './components/player-search-stats/player-search-stats-body/achievement-modal/achievement-modal/achievement-modal.component';
import {BuilderInfoService} from './services/builder-info/builder-info.service';
import {TroopsAndSpellsModalComponent} from './components/player-search-stats/player-search-stats-body/troops-and-spells-modal/troops-and-spells-modal.component';
import {CurrentSeasonModalComponent} from './components/player-search-stats/player-search-stats-body/current-season-modal/current-season-modal.component';
import {ClanModalComponent} from './components/player-search-stats/player-search-stats-body/clan-modal/clan-modal.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {TroopsHomeAttackStatsService} from './services/troops-and-spells-mapper/home/troops-home-attack-stats.service';
import {TroopsNightAttackStatsService} from './services/troops-and-spells-mapper/night/troops-night-attack-stats.service';
import {AdvancedSpellsHomeStatsService} from './services/troops-and-spells-mapper/home/home-spells/advanced-spells-home-stats.service';
import {TroopsHomeAttackStatsDisplayService} from './services/troops-and-spells-mapper/home/home-troops-display/troops-home-attack-stats-display.service';
import {SpellsHomeStatsDisplayService} from './services/troops-and-spells-mapper/home/home-spells-display/spells-home-stats-display.service';
import {TroopsNightAttackStatsDisplayService} from './services/troops-and-spells-mapper/night/night-troops-display/troops-night-attack-stats-display.service';
import {AgGridModule} from 'ag-grid-angular';
import {TrophiesHomeCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {TrophiesNightCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';

const appRoutes: Routes = [
  {path: 'search/:playerId', component: PlayerSearchResultComponent, data: {depth: 2}}
];

@NgModule({
  declarations: [
    PlayerSearchResultComponent,
    PlayerSearchStatsComponent,
    ErrorSearchResultComponent,
    PlayerSearchStatsHeaderComponent,
    PlayerSearchStatsBodyComponent,
    AchievementModalComponent,
    ClanModalComponent,
    TroopsAndSpellsModalComponent,
    CurrentSeasonModalComponent
  ],
  imports: [
    AgGridModule.withComponents([
      TrophiesHomeCellRendererComponent,
      TrophiesNightCellRendererComponent
    ]),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    AccordionModule.forRoot(),
    Angular2FontawesomeModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      appRoutes
    )],
  providers: [
    TroopsHomeAttackStatsService,
    TroopsNightAttackStatsService,
    AdvancedSpellsHomeStatsService,
    TroopsHomeAttackStatsDisplayService,
    SpellsHomeStatsDisplayService,
    TroopsNightAttackStatsDisplayService,
    HttpClientModule,
    PlayerSearchService,
    HeroMapperService,
    BuilderInfoService
  ],
  exports: []
})
export class PlayerResultModule {
}
