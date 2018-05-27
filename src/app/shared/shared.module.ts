import {NgModule} from '@angular/core';
import {HashTransformerService} from './services/hash-transformer/hash-transformer.service';
import {HeaderInterceptorService} from './services/header-interceptor/header-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TownhallPictureService} from './services/townhall-picture/townhall-picture.service';
import {ClanSearchService} from './services/clan-search/clan-search.service';
import {LoadingScreenComponent} from './components/loading-screen/loading-screen.component';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {TrophiesHomeCellRendererComponent} from './components/ag-grid-cell-renderer/trophies-home-cell-renderer.component';
import {CommonModule} from '@angular/common';
import {TrophiesNightCellRendererComponent} from './components/ag-grid-cell-renderer/trophies-night-cell-renderer.component';
import {SpellAbilityCellRendererComponent} from './components/ag-grid-cell-renderer/spell-ability-cell-renderer.component';
import {DamagePerSecCellRendererComponent} from './components/ag-grid-cell-renderer/damage-per-sec-cell-renderer.component';
import {DamagePerHitCellRendererComponent} from './components/ag-grid-cell-renderer/damage-per-hit-cell-renderer.component';
import {MaxValueCellRendererComponent} from './components/ag-grid-cell-renderer/max-value-cell-renderer.component';
import {NoValueCellRendererComponent} from './components/ag-grid-cell-renderer/no-value-cell-renderer.component';
import {HitPointsCellRendererComponent} from './components/ag-grid-cell-renderer/hit-points-cell-renderer.component';
import {ErrorSearchResultComponent} from './components/error-search-result/error-search-result.component';
import {WarFrequencyPipe} from './pipes/war-frequency/war-frequency.pipe';
import {PlayerSearchService} from './services/player-search/player-search.service';
import {RoleTypePipe} from './pipes/role-type/role-type.pipe';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    TrophiesHomeCellRendererComponent,
    TrophiesNightCellRendererComponent,
    SpellAbilityCellRendererComponent,
    DamagePerSecCellRendererComponent,
    DamagePerHitCellRendererComponent,
    HitPointsCellRendererComponent,
    MaxValueCellRendererComponent,
    NoValueCellRendererComponent,
    ErrorSearchResultComponent,
    WarFrequencyPipe,
    RoleTypePipe
  ],
  imports: [
    AngularFireStorageModule,
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  },
    HashTransformerService,
    TownhallPictureService,
    PlayerSearchService,
    ClanSearchService
  ],
  exports: [
    LoadingScreenComponent,
    TrophiesHomeCellRendererComponent,
    TrophiesNightCellRendererComponent,
    SpellAbilityCellRendererComponent,
    DamagePerSecCellRendererComponent,
    DamagePerHitCellRendererComponent,
    MaxValueCellRendererComponent,
    NoValueCellRendererComponent,
    ErrorSearchResultComponent,
    WarFrequencyPipe,
    RoleTypePipe
  ]
})
export class SharedModule {
}
