import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {PlayerSearchService} from '../../../shared/services/player-search/player-search.service';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import 'rxjs/add/observable/of';
import {isUndefined} from 'util';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-search-result.component.html'
})
export class PlayerSearchResultComponent implements OnInit {

  public isLoading = true;
  public searchValue: string;
  public hasNoResultFound = false;
  public playerResult: PlayerByPlayerTagType;
  public clanInfo: ClansByClantagType;

  constructor(private playerSearchService: PlayerSearchService,
              private activatedRoute: ActivatedRoute,
              private clanSearchService: ClanSearchService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchValue = params['playerId'];
      this.loadPlayerData();
    });
  }

  loadPlayerData() {
    this.playerSearchService.getPlayerByPlayerTag(this.searchValue)
      .subscribe(player => this.playerResult = player,
        () => {
          this.hasNoResultFound = true;
          this.isLoading = false;
        }, () => {
        console.log(this.playerResult);
          if (!isUndefined(this.playerResult.clan)) {
            this.clanSearchService.getClanByClanTag(this.playerResult.clan.tag)
              .subscribe(clan => this.clanInfo = clan);
          }
          this.isLoading = false;
        });
  }
}
