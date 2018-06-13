import {NgModule} from '@angular/core';
import {HashTransformerService} from './services/hash-transformer/hash-transformer.service';
import {HeaderInterceptorService} from './services/header-interceptor/header-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TownhallHomePictureService} from './services/townhall-picture/home/townhall-home-picture.service';
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
import {LeagueBadgeCellRendererComponent} from './components/ag-grid-cell-renderer/league-badge-cell-renderer.component';
import {RoleCellRendererComponent} from './components/ag-grid-cell-renderer/role-cell-renderer-component';
import {TownhallPictureCellRendererComponent} from './components/ag-grid-cell-renderer/townhall-picture-cell-renderer.component';
import {WarStarsCellRendererComponent} from './components/ag-grid-cell-renderer/war-stars-cell-renderer.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {EnterTypePipe} from './pipes/enter-type/enter-type.pipe';
import {TownhallNightPictureService} from './services/townhall-picture/night/townhall-night-picture.service';

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
    RoleTypePipe,
    LeagueBadgeCellRendererComponent,
    RoleCellRendererComponent,
    TownhallPictureCellRendererComponent,
    WarStarsCellRendererComponent,
    EnterTypePipe
  ],
  imports: [
    AngularFireStorageModule,
    CommonModule,
    Angular2FontawesomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  },
    HashTransformerService,
    TownhallHomePictureService,
    PlayerSearchService,
    ClanSearchService,
    TownhallNightPictureService
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
    RoleTypePipe,
    LeagueBadgeCellRendererComponent,
    RoleCellRendererComponent,
    TownhallPictureCellRendererComponent,
    WarStarsCellRendererComponent,
    EnterTypePipe
  ]
})
export class SharedModule {
}
