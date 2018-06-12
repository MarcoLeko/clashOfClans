import {Injectable} from '@angular/core';
import {PlayerSearchService} from '../../../shared/services/player-search/player-search.service';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {FilterModel} from '../../../home/components/clan-search/filter-model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlayerOrClanResultService {

  constructor(private playerSearchService: PlayerSearchService,
              private clanSearchService: ClanSearchService) {
  }

  getPlayerOrClanStats(searchValue: string): Observable<any> {
    let arrResult = [];
    const value: FilterModel
      = new FilterModel(undefined, undefined, undefined,
      undefined, undefined, searchValue);

    return this.playerSearchService.getPlayerByPlayerTag(value.selectedClanNameOrClanTag).map((result: PlayerByPlayerTagType) => {
      arrResult.push(result);
      return arrResult;
    }).catch(() => {
      return this.clanSearchService.getClanByClanTag(value.selectedClanNameOrClanTag).map((result: ClansByClantagType) => {
        arrResult.push(result);
        return arrResult;
      });
    }).catch(() => {
      return this.clanSearchService.getClansByFilterValues(value).map((result: ClansByClantagType[]) => {
        arrResult = result;
        return arrResult;
      });
    });
  }

}
