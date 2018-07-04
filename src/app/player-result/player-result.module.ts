import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerSearchResultComponent} from './components/player-search-result/player-search-result.component';
import {PlayerSearchStatsComponent} from './components/player-search-stats/player-search-stats.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PlayerSearchStatsHeaderComponent} from './components/player-search-stats/player-search-stats-header/player-search-stats-header.component';
import {PlayerSearchStatsBodyComponent} from './components/player-search-stats/player-search-stats-body/player-search-stats-body.component';
import {HeroMapperService} from './services/hero-mapper/hero-mapper.service';
import {AccordionModule, ProgressbarModule} from 'ngx-bootstrap';
import {AchievementComponent} from './components/player-search-stats/player-search-stats-body/achievement/achievement.component';
import {BuilderInfoService} from './services/builder-info/builder-info.service';
import {ClanStatsComponent} from './components/player-search-stats/player-search-stats-body/clan-stats/clan-stats.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {AgGridModule} from 'ag-grid-angular';
import {TrophiesNightCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {SpellAbilityCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/spell-ability-cell-renderer.component';
import {DamagePerSecCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/damage-per-sec-cell-renderer.component';
import {DamagePerHitCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/damage-per-hit-cell-renderer.component';
import {MaxValueCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/max-value-cell-renderer.component';
import {NoValueCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/no-value-cell-renderer.component';
import {HitPointsCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/hit-points-cell-renderer.component';
import {RoleCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/role-cell-renderer-component';
import {TroopsAndSpellsComponent} from './components/player-search-stats/player-search-stats-body/troops-and-spells/troops-and-spells.component';
import {TroopsAndSpellsResolveHelperService} from './services/troops-and-spells/troops-and-spells-resolve-helper.service';
import {TroopsNightResolverService} from './services/troops-and-spells/troops-night/troops-night-resolver.service';
import {TroopsHomeResolverService} from './services/troops-and-spells/troops-home/troops-home-resolver.service';
import {SpellsHomeResolverService} from './services/troops-and-spells/spells-home/spells-home-resolver.service';
import {SiegeMachinesResolverService} from './services/troops-and-spells/siege-machines/siege-machines-resolver.service';
import {TrophiesHomeCellRendererComponent} from '../shared/components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';

const appRoutes: Routes = [
  {path: 'playerSearch/:playerId', component: PlayerSearchResultComponent, data: {depth: 3}}
];

@NgModule({
  declarations: [
    PlayerSearchResultComponent,
    PlayerSearchStatsComponent,
    PlayerSearchStatsHeaderComponent,
    PlayerSearchStatsBodyComponent,
    AchievementComponent,
    ClanStatsComponent,
    TroopsAndSpellsComponent
  ],
  imports: [
    AgGridModule.withComponents([
      HitPointsCellRendererComponent,
      TrophiesHomeCellRendererComponent,
      TrophiesNightCellRendererComponent,
      SpellAbilityCellRendererComponent,
      DamagePerSecCellRendererComponent,
      DamagePerHitCellRendererComponent,
      MaxValueCellRendererComponent,
      NoValueCellRendererComponent,
      RoleCellRendererComponent
    ]),
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
    HttpClientModule,
    HeroMapperService,
    BuilderInfoService,
    TroopsAndSpellsResolveHelperService,
    TroopsNightResolverService,
    TroopsHomeResolverService,
    SpellsHomeResolverService,
    SiegeMachinesResolverService
  ],
  exports: []
})
export class PlayerResultModule {
}
