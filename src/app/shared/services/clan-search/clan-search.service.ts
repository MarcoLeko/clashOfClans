import { Injectable } from '@angular/core';
import { HashTransformerService } from '../hash-transformer/hash-transformer.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ClansByClantagType } from '../../../../generated/types';
import { map } from 'rxjs/operators';

@Injectable()
export class ClanSearchService {

  public static CLANURL = 'v1/clans/';
  private clan: ClansByClantagType;

  constructor(private http: HttpClient, private hashTransformer: HashTransformerService) {
  }

  getClanByClanTag(clanTag: string): Observable<ClansByClantagType> {
    if (this.hasCacheClan(clanTag)) {
      return Observable.create(this.clan);
    } else {
      return this.http.get<ClansByClantagType>(ClanSearchService.CLANURL + this.hashTransformer.transformHash(clanTag)).pipe(map(data => this.clan = data));
    }
  }

  private hasCacheClan(clanTag: string) {
    return this.clan && this.clan.tag === clanTag;
  }
}
