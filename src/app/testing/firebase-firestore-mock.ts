import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseFirestoreMock {
  public list(path: string): any {
    return {
      valueChanges() {
        return Observable.of(path)
      }
    }
  }
}
