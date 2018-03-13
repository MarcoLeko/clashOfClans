import { NgModule } from '@angular/core';
import { HashTransformerService } from './services/hash-transformer/hash-transformer.service';
import { HeaderInterceptorService } from './services/header-interceptor/header-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TownhallPictureService } from './services/get-townhall-picture/townhall-picture.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  },
    HashTransformerService,
    TownhallPictureService
  ],
  exports: []
})
export class SharedModule {
}
