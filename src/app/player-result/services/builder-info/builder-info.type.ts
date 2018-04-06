import {Builderhall} from './builder-hall';
import {Observable} from 'rxjs/Observable';

export interface BuilderInfoType {
  builderhall: Builderhall;
  imgSrc: Observable<string | null>;
}
