import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PlayerByPlayerTagType } from '../../../../generated/types';
import { HashTransformerService } from '../../../shared/services/hash-transformer/hash-transformer.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayerSearchService {

  public static PLAYERURL = 'v1/players/';

  private player: PlayerByPlayerTagType;

  constructor(private http: HttpClient, private hashTransformer: HashTransformerService) {
  }

  public getPlayer(playerTag): Observable<PlayerByPlayerTagType> {
    if (this.hasCachePlayer(playerTag)) {
      return Observable.create(this.player);
    } else {
      return this.http.get<PlayerByPlayerTagType>(PlayerSearchService.PLAYERURL + this.hashTransformer.transformHash(playerTag)).
        pipe(map(data => this.player = data));
    }
  }

  private hasCachePlayer(playerTag) {
    return this.player && this.player.tag === playerTag;
  }
}
