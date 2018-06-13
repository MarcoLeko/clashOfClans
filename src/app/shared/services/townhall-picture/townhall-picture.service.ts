import {Injectable} from '@angular/core';
import {TownhallImgSrc} from './townhall-src';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';

@Injectable()
export class TownhallPictureService {

  public ref;

  constructor(private storage: AngularFireStorage) {
  }

  getTownHallPicture(townhall: number): Observable<string | null> {
    let url;
    url = this.reolveTownhallNumberToImg(townhall, url);
    if (isUndefined((url))) {
      return Observable.of(url);
    } else {
      this.ref = this.storage.ref(url);
      return this.ref.getDownloadURL();
    }
  }

  private reolveTownhallNumberToImg(townhall: number, url) {
    const urlPrefix = 'townhalls/';
    const urlSuffix = '.png';

    for (const townhallPic in TownhallImgSrc) {
      const townhallNumber = TownhallImgSrc[townhallPic].replace(/\D+/g, '');
      if (townhall.toString() === townhallNumber) {
        url = urlPrefix + TownhallImgSrc[townhallPic] + urlSuffix;
      }
    }
    return url;
  }
}
