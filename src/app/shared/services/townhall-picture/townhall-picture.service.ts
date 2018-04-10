import {Injectable} from '@angular/core';
import {TownhallImgSrc} from './townhall-src';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TownhallPictureService {

  public ref;

  constructor(private storage: AngularFireStorage) {
  }

  getTownHallPicture(townhall: number): Observable<string | null> {
    switch (townhall) {
      case 1:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_ONE);
        break;
      case 2:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_TWO);
        break;
      case 3:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_THREE);
        break;
      case 4:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_FOUR);
        break;
      case 5:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_FIVE);
        break;
      case 6:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_SIX);
        break;
      case 7:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_SEVEN);
        break;
      case 8:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_EIGHT);
        break;
      case 9:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_NINE);
        break;
      case 10:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_TEN);
        break;
      case 11:
        this.ref = this.storage.ref(TownhallImgSrc.TOWNHALL_ELEVEN);
        break;
      default:
        return Observable.of(undefined);
    }
    return this.ref.getDownloadURL();
  }
}
