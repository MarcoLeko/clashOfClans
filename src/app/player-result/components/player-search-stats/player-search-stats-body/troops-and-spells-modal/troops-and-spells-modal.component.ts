import {Component, Input, OnChanges, ViewChild} from '@angular/core';
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
export class TroopsAndSpellsModalComponent implements OnChanges {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;

  public builderInfoHome: BuilderInfoType;
  public builderInfoNight: BuilderInfoType;
  public homeTroopsStats: TroopsHomeAttackStatsDisplay[];
  public nightTroopsStats: TroopsNightAttackStatsDisplay[];
  public homeSpellsStats: SpellsHomeStatsDisplay[];

  public columnDefsForHomeTroops = [
    {headerName: 'Name', width: 100, field: 'name'},
    {headerName: 'Level', width: 80, field: 'level'},
    {headerName: 'Progress', width: 100, field: 'isMaxLevel'},
    {headerName: 'Damage per sec', width: 150, field: 'damagePerSec'},
    {headerName: 'Damage per hit', width: 150, field: 'damagePerHit'},
    {headerName: 'Hitpoints', width: 100, field: 'hitPoints'}
  ];
  public columnDefsForHomeSpells = [
    {headerName: 'Name', width: 150, field: 'name'},
    {headerName: 'Level', width: 80, field: 'level'},
    {headerName: 'Progress', width: 100, field: 'isMaxLevel'},
    {headerName: 'Housing space', width: 130, field: 'housingSpace'},
    {headerName: 'Spell effect', width: 120, field: 'type'},
    {headerName: 'Ability', width: 100, field: ''},
  ];

  constructor(private troopsService: TroopsHomeAttackStatsService,
              private builderInfoService: BuilderInfoService,
              private troopsHomeAttackStatsDisplayService: TroopsHomeAttackStatsDisplayService,
              private spellsHomeStatsDisplayService: SpellsHomeStatsDisplayService,
              private troopsNightAttackStatsDisplayService: TroopsNightAttackStatsDisplayService) {
  }

  ngOnChanges(): void {
    const builderBaseIndex = this.playerResult.troops.length - 1;
    this.builderInfoService.getBuilderInfoType(this.playerResult.troops[0].village)
      .subscribe(data => this.builderInfoHome = data);

    this.builderInfoService.getBuilderInfoType(this.playerResult.troops[builderBaseIndex].village)
      .subscribe(data => this.builderInfoNight = data);

    this.troopsHomeAttackStatsDisplayService.getTroopsDisplayStats(this.playerResult.troops)
      .subscribe((result: TroopsHomeAttackStatsDisplay[]) => this.homeTroopsStats = result);

    this.spellsHomeStatsDisplayService.getSpellsDisplayHomeStats(this.playerResult.spells).subscribe(
      result => this.homeSpellsStats = result);

    this.troopsNightAttackStatsDisplayService.getTroopsDisplayStats(this.playerResult.troops).subscribe(
      result => this.nightTroopsStats = result);
  }

  private abilityResolver(): string {
    if (this.homeSpellsStats) {
      for (const spell of this.homeSpellsStats) {
        for (const stat in spell) {
          if (stat !== 'name' && stat !== 'level' && stat !== 'isMaxLevel'
            && stat !== 'housingSpace' && stat !== 'type') {
              return stat as string;
          }
        }
      }
    }
  }

  open() {
    this.modal.show();
  }

}
