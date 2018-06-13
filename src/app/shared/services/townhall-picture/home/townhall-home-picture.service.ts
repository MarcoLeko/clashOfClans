import {Injectable} from '@angular/core';
import {TownhallHomeImgSrc} from './townhall-home-img-src';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

@Injectable()
export class TownhallHomePictureService {

  public ref;

  constructor(private storage: AngularFireStorage) {
  }

  getTownHallPicture(townhall: number): Observable<string | null> {
    let url;
    url = this.reolveTownhallNumberToImg(townhall);
    if (isUndefined((url))) {
      return Observable.of(url);
    } else {
      this.ref = this.storage.ref(url);
      return this.ref.getDownloadURL();
    }
  }

  private reolveTownhallNumberToImg(townhall: number) {
    let url;
    const urlPrefix = 'townhall-home/';
    const urlSuffix = '.png';

    for (const townhallPic in TownhallHomeImgSrc) {
      const townhallNumber = TownhallHomeImgSrc[townhallPic].replace(/\D+/g, '');
      if (townhall.toString() === townhallNumber) {
        url = urlPrefix + TownhallHomeImgSrc[townhallPic] + urlSuffix;
      }
    }
    return url;
  }
}
