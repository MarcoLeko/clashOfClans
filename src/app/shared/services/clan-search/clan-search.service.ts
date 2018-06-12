import {Injectable} from '@angular/core';
import {HashTransformerService} from '../hash-transformer/hash-transformer.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ClansByClantagType} from '../../../../generated/types';
import {map} from 'rxjs/operators';
import {FilterModel} from '../../../home/components/clan-search/filter-model';
import {ClanSearchParameters} from './clan-search-parameters';
import {isUndefined} from 'util';

@Injectable()
export class ClanSearchService {

  public static CLANURL = 'v1/clans/';
  private clan: ClansByClantagType;
  private clans: ClansByClantagType[];

  constructor(private http: HttpClient, private hashTransformer: HashTransformerService) {
  }

  public static hasMinLength(name: string): boolean {
    return name && name.length >= 3;
  }

  getClanByClanTag(clanTag: string): Observable<ClansByClantagType> {
    if (this.hasClanInCache(clanTag)) {
      return Observable.of(this.clan);
    } else {
      if (ClanSearchService.hasMinLength(clanTag)) {
        return this.http.get<ClansByClantagType>(ClanSearchService.CLANURL + this.hashTransformer.transformHash(clanTag))
          .pipe(map(data => this.clan = data));
      }
    }
  }

  getClansByFilterValues(filterValues: FilterModel): Observable<any> {
    let url = 'v1/clans?';
    if (ClanSearchService.hasMinLength(filterValues.selectedClanNameOrClanTag) &&
      !filterValues.selectedClanNameOrClanTag.includes('#')) {
      for (const value in filterValues) {
        if (this.hasUndefinedValue(filterValues, value)) {
          for (const parameter in ClanSearchParameters) {
            const firstOperator = value;
            const secondOperator = parameter;
            if (firstOperator.toUpperCase().includes(secondOperator.toUpperCase())) {
              url += ClanSearchParameters[parameter] + filterValues[value] + '&';
            }
          }
        }
      }
      return this.http.get<any>(url).pipe(map(data => this.clans = data.items));
    } else {
      return Observable.of([]);
    }
  }

  private hasUndefinedValue(filterValues: FilterModel, value) {
    return !isUndefined(filterValues[value]) && filterValues[value] !== null && filterValues[value] !== ''
      && filterValues[value] !== 0;
  }

  private hasClanInCache(clanTag: string): boolean {
    return this.clan && this.clan.tag === clanTag;
  }
}
