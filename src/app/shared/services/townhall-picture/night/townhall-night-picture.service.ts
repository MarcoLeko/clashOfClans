import {Injectable} from '@angular/core';
import {isUndefined} from 'util';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TownhallNightImgSrc} from './townhall-night-img-src';

@Injectable()
export class TownhallNightPictureService {

  public ref;

  constructor(private storage: AngularFireStorage) {
  }

  getTownHallPicture(builderhall: number): Observable<string | null> {
    if (builderhall) {
    let url;
    url = this.reolveTownhallNumberToImg(builderhall);
    if (isUndefined((url))) {
      return Observable.of(url);
    } else {
      this.ref = this.storage.ref(url);
      return this.ref.getDownloadURL();
    }
    } else {
      return Observable.of(undefined);
    }
  }

  private reolveTownhallNumberToImg(townhall: number) {
    let url;
    const urlPrefix = 'townhall-night/';
    const urlSuffix = '.png';

    for (const townhallPic in TownhallNightImgSrc) {
      const townhallNumber = TownhallNightImgSrc[townhallPic].replace(/\D+/g, '');
      if (townhall.toString() === townhallNumber) {
        url = urlPrefix + TownhallNightImgSrc[townhallPic] + urlSuffix;
      }
    }
    return url;
  }
}
