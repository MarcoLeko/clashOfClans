import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {PlayerSearchService} from '../../services/player-search/player-search.service';
import {isUndefined} from 'util';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-search-result.component.html',
  styleUrls: ['./player-search-result.component.css']
})
export class PlayerSearchResultComponent implements OnInit, AfterViewInit {

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
    });
  }

  ngAfterViewInit() {
    this.playerSearchService.getPlayerByPlayerTag(this.searchValue).subscribe(player => {
        this.playerResult = player;
        if (!isUndefined(this.playerResult.clan)) {
          this.clanSearchService.getClanByClanTag(this.playerResult.clan.tag).subscribe((data: ClansByClantagType) => {
            this.clanInfo = data;
          });
        }
      }, () => {
        this.hasNoResultFound = true;
        this.isLoading = false;
      },
      () => this.isLoading = false);
  }
}
