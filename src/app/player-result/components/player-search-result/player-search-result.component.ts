import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {PlayerSearchService} from '../../services/player-search/player-search.service';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-search-result.component.html',
  styleUrls: ['./player-search-result.component.css']
})
export class PlayerSearchResultComponent implements OnInit {

  public isLoading = true;
  public searchValue: string;
  public playerResult: PlayerByPlayerTagType;
  public hasNoResultFound = false;
  public clanInfo: ClansByClantagType;

  constructor(private playerSearchService: PlayerSearchService,
              private activatedRoute: ActivatedRoute,
              private clanSearchService: ClanSearchService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchValue = params['playerId'];
      this.loadPlayerData(this.searchValue);
    });
  }

  loadPlayerData(event) {
    this.searchValue = event;
    this.playerSearchService.getPlayerByPlayerTag(this.searchValue).subscribe(player => {
      this.playerResult = player;
      console.log(this.playerResult);
      if (!isUndefined(this.playerResult.clan)) {
        this.clanSearchService.getClanByClanTag(this.playerResult.clan.tag).subscribe((data: ClansByClantagType) =>
          this.clanInfo = data
        );
      }
      this.isLoading = false;
    }, () => {
        this.hasNoResultFound = true;
        this.isLoading = false;
      });
  }

}
