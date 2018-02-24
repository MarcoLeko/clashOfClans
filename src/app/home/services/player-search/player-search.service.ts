import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {PlayerByPlayerTagType} from "../../../../generated/types";
import {HashTransformerService} from "../../../shared/domain/hash-transformer.service";

@Injectable()
export class PlayerSearchService {

  constructor(private http: HttpClient, private hashTransformer: HashTransformerService) {
  }

  public getPlayer(playerTag): Observable<PlayerByPlayerTagType> {
   return this.http.get<PlayerByPlayerTagType>('v1/players/' + this.hashTransformer.transformHash(playerTag));
  }
}
