import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClansByClantagType} from '../../../../generated/types';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {PlayerSearchService} from '../../../shared/services/player-search/player-search.service';
import {CompleteClanMemberStatsType} from './complete-clan-member-stats.types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompleteClanMemberStatsService {

  private clan: ClansByClantagType;
  private completeMemberStats: CompleteClanMemberStatsType[] = [];

  constructor(private http: HttpClient,
              private clanSearchService: ClanSearchService,
              private playerSearchService: PlayerSearchService) {
  }

  getStats(tag: string) {
    if (this.clan && tag === this.clan.tag) {
      return Observable.of(this.completeMemberStats);
    } else {
      return this.clanSearchService.getClanByClanTag(tag)
        .mergeMap(clan => {
          this.clan = clan;
          return clan.memberList;
        })
        .mergeMap(member => this.playerSearchService.getPlayerByPlayerTag(member.tag),
          (member, player) => {
            const singlePlayerStats: CompleteClanMemberStatsType = {
              tag: member.tag,
              name: member.name,
              warStars: player.warStars,
              townhall: player.townHallLevel,
              level: player.expLevel,
              role: member.role,
              league: player.league,
              trophies: member.trophies,
              trophiesNightBase: member.versusTrophies
            };
            this.completeMemberStats.push(singlePlayerStats);
            return singlePlayerStats;
          }).toArray();
    }
  }
}
