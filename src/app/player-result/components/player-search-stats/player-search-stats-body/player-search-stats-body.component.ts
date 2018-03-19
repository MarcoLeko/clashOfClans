import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ClansByClantagType, PlayerByPlayerTagType } from '../../../../../generated/types';
import { ClanSearchService } from '../../../../shared/services/clan-search/clan-search.service';
import { Mocks } from '../../../../testing/mocks';
import { isUndefined } from 'util';
import { AchievementModalComponent } from './achievement-modal/achievement-modal/achievement-modal.component';

@Component({
  selector: 'app-player-search-stats-body',
  templateUrl: './player-search-stats-body.component.html',
  styleUrls: ['./player-search-stats-body.component.css']
})
export class PlayerSearchStatsBodyComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild(AchievementModalComponent) achievementModal: AchievementModalComponent;
  public clanInfo: ClansByClantagType = Mocks.CLANSTATSBYCLANTAG;

  constructor(private clanSearchService: ClanSearchService) {
  }

  ngOnInit() {
    if (!isUndefined(this.playerResult.clan)) {
      this.clanSearchService.getClanByClanTag(this.playerResult.clan.tag).subscribe((data: ClansByClantagType) => {
        this.clanInfo = data;
      });
    }
  }

  clanSearch() {
  }
}
