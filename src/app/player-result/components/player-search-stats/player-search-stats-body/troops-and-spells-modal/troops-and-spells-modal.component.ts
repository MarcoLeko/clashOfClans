import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';
import {BuilderInfoType} from '../../../../services/builder-info/builder-info.type';
import {TroopsHomeAttackStatsService} from '../../../../services/troops-and-spells-mapper/home/troops-home-attack-stats.service';
import {TroopsHomeAttackStatsDisplayService} from '../../../../services/troops-and-spells-mapper/home/home-troops-display/troops-home-attack-stats-display.service';
import {TroopsHomeAttackStatsDisplay} from '../../../../services/troops-and-spells-mapper/home/home-troops-display/troops-home-attack-stats-display.type';
import {SpellsHomeStatsDisplayService} from '../../../../services/troops-and-spells-mapper/home/home-spells-display/spells-home-stats-display.service';
import {TroopsNightAttackStatsDisplayService} from '../../../../services/troops-and-spells-mapper/night/night-troops-display/troops-night-attack-stats-display.service';
import {TroopsNightAttackStatsDisplay} from '../../../../services/troops-and-spells-mapper/night/night-troops-display/troops-night-attack-stats-display.type';
import {SpellsHomeStatsDisplay} from '../../../../services/troops-and-spells-mapper/home/home-spells-display/spells-home-stats-display.type';

@Component({
  selector: 'app-troops-and-spells-modal',
  templateUrl: './troops-and-spells-modal.component.html',
  styleUrls: ['./troops-and-spells-modal.component.css']
})
export class TroopsAndSpellsModalComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;

  public builderInfo: BuilderInfoType;
  public homeTroopsStats: TroopsHomeAttackStatsDisplay[];
  public nightTroopsStats: TroopsNightAttackStatsDisplay[];
  public homeSpellsStats: SpellsHomeStatsDisplay[];

  constructor(private troopsService: TroopsHomeAttackStatsService,
              private builderInfoService: BuilderInfoService,
              private troopsHomeAttackStatsDisplayService: TroopsHomeAttackStatsDisplayService,
              private spellsHomeStatsDisplayService: SpellsHomeStatsDisplayService,
              private troopsNightAttackStatsDisplayService: TroopsNightAttackStatsDisplayService) {
  }

  ngOnInit(): void {
    console.log(this.playerResult);
    this.builderInfoService.getBuilderInfoType(this.playerResult.troops[0].village).subscribe(data => {
      this.builderInfo = data;
      this.troopsHomeAttackStatsDisplayService.getTroopsDisplayStats(this.playerResult.troops).subscribe((result: TroopsHomeAttackStatsDisplay[]) => {
        this.homeTroopsStats = result;
      });
    });
    this.spellsHomeStatsDisplayService.getSpellsDisplayHomeStats(this.playerResult.spells).subscribe(
      result => this.homeSpellsStats = result);
    this.troopsNightAttackStatsDisplayService.getTroopsDisplayStats(this.playerResult.troops).subscribe(
      result => this.nightTroopsStats = result);
  }

  open() {
    this.modal.show();
  }

}
