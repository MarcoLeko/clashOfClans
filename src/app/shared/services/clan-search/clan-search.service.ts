import {Injectable} from '@angular/core';
import {HashTransformerService} from '../hash-transformer/hash-transformer.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ClansByClantagType} from '../../../../generated/types';
import {map} from 'rxjs/operators';
import {FilterModel} from '../../../home/components/clan-search/filter-model';
import {ClanSearchParameters} from './clan-search-parameters';

@Injectable()
export class ClanSearchService {

  public static CLANURL = 'v1/clans/';
  private clan: ClansByClantagType;
  private clans: ClansByClantagType[];

  constructor(private http: HttpClient, private hashTransformer: HashTransformerService) {
  }

  getClanByClanTag(clanTag: string): Observable<ClansByClantagType> {
    if (this.hasClanInCache(clanTag)) {
      return Observable.of(this.clan);
    } else {
      if (this.isClanNameValid(clanTag)) {
        return this.http.get<ClansByClantagType>(ClanSearchService.CLANURL + this.hashTransformer.transformHash(clanTag)).pipe(map(data => this.clan = data));
      }
    }
  }

  getClansByFilterValues(filterValues: FilterModel): Observable<any> {
    let url: string = 'v1/clans?';
    if (this.isClanNameValid(filterValues.selectedClanNameOrClanTag) &&
      !filterValues.selectedClanNameOrClanTag.includes('#')) {
      for (const value in filterValues) {
        for (const parameter in ClanSearchParameters) {
          let firstOperator: string = value;
          let secondOperator: string = parameter;
          if (firstOperator.toUpperCase().includes(secondOperator.toUpperCase())) {
            url += ClanSearchParameters[parameter] + filterValues[value] + '&';
          }
        }
      }
      return this.http.get<any>(url).pipe(map(data => this.clans = data.items));
    } else {
      return Observable.of([]);
    }
  }

  private hasClanInCache(clanTag: string): boolean {
    return this.clan && this.clan.tag === clanTag;
  }

  private isClanNameValid(name: string): boolean {
    return name && name.length >= 3;
  }
}
