import {NgModule} from '@angular/core';
import {HashTransformerService} from './services/hash-transformer/hash-transformer.service';
import {HeaderInterceptorService} from './services/header-interceptor/header-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TownhallPictureService} from './services/townhall-picture/townhall-picture.service';
import {ClanSearchService} from './services/clan-search/clan-search.service';
import {LoadingScreenComponent} from './components/loading-screen/loading-screen.component';
import {AngularFireStorageModule} from 'angularfire2/storage';

@NgModule({
  declarations: [
    LoadingScreenComponent
  ],
  imports: [
    AngularFireStorageModule
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
    LoadingScreenComponent
  ]
})
export class SharedModule {
}
