import {Component, Input, ViewChild} from '@angular/core';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../../generated/types';
import {AchievementModalComponent} from './achievement-modal/achievement-modal/achievement-modal.component';
import {ClanModalComponent} from './clan-modal/clan-modal.component';
import {CurrentSeasonModalComponent} from './current-season-modal/current-season-modal.component';
import {TroopsAndSpellsModalComponent} from './troops-and-spells-modal/troops-and-spells-modal.component';

@Component({
  selector: 'app-player-search-stats-body',
  templateUrl: './player-search-stats-body.component.html',
  styleUrls: ['./player-search-stats-body.component.css']
})
export class PlayerSearchStatsBodyComponent {

  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  @ViewChild(AchievementModalComponent) achievementModal: AchievementModalComponent;
  @ViewChild(ClanModalComponent) clanModal: ClanModalComponent;
  @ViewChild(CurrentSeasonModalComponent) currentSeasonModal: CurrentSeasonModalComponent;
  @ViewChild(TroopsAndSpellsModalComponent) troopsAndSpellsModal: TroopsAndSpellsModalComponent;

  clanSearch() {
  }

}
