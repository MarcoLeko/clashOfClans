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

@NgModule({
  declarations: [
    LoadingScreenComponent,
    TrophiesHomeCellRendererComponent,
    TrophiesNightCellRendererComponent
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
    ClanSearchService
  ],
  exports: [
    LoadingScreenComponent,
    TrophiesHomeCellRendererComponent,
    TrophiesNightCellRendererComponent
  ]
})
export class SharedModule {
}
