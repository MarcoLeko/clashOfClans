import {Injectable} from '@angular/core';
import {BuilderInfoType} from './builder-info.type';
import {Builderhall} from './builder-hall';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class BuilderInfoService {
  public builderRef = this.storage.ref('images/builder.png');
  public builderMasterRef = this.storage.ref('images/builder_master.png');

  constructor(private storage: AngularFireStorage) {
  }

  getBuilderInfoType(base: string): Observable<BuilderInfoType> {
    if (base === 'builderBase') {
      return this.builderMasterRef.getDownloadURL().map(url => {
        return {builderhall: Builderhall.BUILDERHALL_BASE, imgSrc: url};
      });
    }
    else {
      return this.builderRef.getDownloadURL().map(url => {
        return {builderhall: Builderhall.TOWNHALL_BASE, imgSrc: url};
      });
    }
  }
}
