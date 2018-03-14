import { Component, Input, OnInit } from '@angular/core';
import { ClansByClantagType, PlayerByPlayerTagType } from '../../../../../generated/types';
import { ClanSearchService } from '../../../../shared/services/clan-search/clan-search.service';
import { Mocks } from '../../../../testing/mocks';

@Component({
  selector: 'app-player-search-stats-body',
  templateUrl: './player-search-stats-body.component.html',
  styleUrls: ['./player-search-stats-body.component.css']
})
export class PlayerSearchStatsBodyComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  public clanInfo: ClansByClantagType = Mocks.CLANSTATSBYCLANTAG;

  constructor(private clanSearchService: ClanSearchService) {
  }

  ngOnInit() {
    this.clanSearchService.getClanByClanTag(this.playerResult.clan.tag).subscribe((data: ClansByClantagType) => {
      this.clanInfo = data;
    });
  }

}
