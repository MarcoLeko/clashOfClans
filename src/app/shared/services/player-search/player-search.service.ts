import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PlayerByPlayerTagType} from '../../../../generated/types';
import {HashTransformerService} from '../hash-transformer/hash-transformer.service';

@Injectable()
export class PlayerSearchService {

  public static PLAYERURL = 'v1/players/';

  private player: PlayerByPlayerTagType;

  constructor(private http: HttpClient, private hashTransformer: HashTransformerService) {
  }

  public getPlayerByPlayerTag(playerTag: string): Observable<PlayerByPlayerTagType> {
    if (this.hasCachePlayer(playerTag)) {
      return Observable.of(this.player);
    } else {
      return this.http.get<PlayerByPlayerTagType>(PlayerSearchService.PLAYERURL + this.hashTransformer.transformHash(playerTag))
        .map(data => this.player = data);
    }
  }

  private hasCachePlayer(playerTag: string) {
    return this.player && this.player.tag === playerTag;
  }
}
