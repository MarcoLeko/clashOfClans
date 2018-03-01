import {Injectable} from "@angular/core";
import {isUndefined} from "util";

@Injectable()
export class HashTransformerService {

  transformHash(url: string): string {
    if (!isUndefined(url)) {
      return url.replace('#', '%23');
    }
    return url;
  }
}
