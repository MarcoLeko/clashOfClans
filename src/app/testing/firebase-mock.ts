import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class FirebaseMock {

  public ref(path: string) {
      return {
        getDownloadURL() {
          return Observable.of(path)
        }
      }
  }
}
