import { NgModule } from '@angular/core';
import { HashTransformerService } from './domain/hash-transformer.service';
import { HeaderInterceptorService } from './services/header-interceptor/header-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  },
    HashTransformerService
  ],
  exports: []
})
export class SharedModule {
}
