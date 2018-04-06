import {Injectable} from '@angular/core';
import {BuilderInfoType} from './builder-info.type';
import {Builderhall} from './builder-hall';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';


@Injectable()
export class BuilderInfoService {
  public builderRef = this.storage.ref('images/builder.png');
  public builderMasterRef = this.storage.ref('images/builder_master.png');

  public builderImg: Observable<string | null>;
  public builderMasterImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
    this.builderMasterRef.getDownloadURL().subscribe(url => this.builderMasterImg = url);
    this.builderRef.getDownloadURL().subscribe(url => this.builderImg = url);
  }

  getBuilderInfoType(base: string): BuilderInfoType {
    let builderInfo: BuilderInfoType;
    if (base === 'builderBase') {
      builderInfo = {
        builderhall: Builderhall.BUILDERHALL_BASE,
        imgSrc: this.builderMasterImg
      };
      return builderInfo;
    } else {
      builderInfo = {
        builderhall: Builderhall.TOWNHALL_BASE,
        imgSrc: this.builderImg
      };
      return builderInfo;
    }
  }
}
