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
import {SpellAbilityCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/spell-ability-cell-renderer.component';
import {DamagePerSecCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/damage-per-sec-cell-renderer.component';
import {DamagePerHitCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/damage-per-hit-cell-renderer.component';
import {MaxValueCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/max-value-cell-renderer.component';
import {NoValueCellRendererComponent} from '../../../../../shared/components/ag-grid-cell-renderer/no-value-cell-renderer.component';

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
  public frameworkComponents = {
    spellAbilityCellRendererComponent: SpellAbilityCellRendererComponent,
    maxValueCellRendererComponent: MaxValueCellRendererComponent,
    noValueCellRendererComponent: NoValueCellRendererComponent,
  };

  public columnDefsForHomeTroops = [
    {headerName: 'Name', width: 100, field: 'name'},
    {headerName: 'Level', width: 80, field: 'level'},
    {headerName: 'Progress', width: 100, field: 'isMaxLevel', cellRenderer: 'maxValueCellRendererComponent'},
    {headerName: 'Damage per sec', width: 150, field: 'damagePerSec', headerComponentFramework: DamagePerSecCellRendererComponent},
    {headerName: 'Damage per hit', width: 150, field: 'damagePerHit', headerComponentFramework: DamagePerHitCellRendererComponent},
    {headerName: 'Hitpoints', width: 100, field: 'hitPoints'}
  ];
  public columnDefsForHomeSpells = [
    {headerName: 'Name', width: 150, field: 'name'},
    {headerName: 'Level', width: 80, field: 'level'},
    {headerName: 'Progress', width: 100, field: 'isMaxLevel', cellRenderer: 'maxValueCellRendererComponent'},
    {headerName: 'Housing space', width: 130, field: 'housingSpace'},
    {headerName: 'Spell effect', width: 120, field: 'type'},
    {headerName: 'Ability', width: 100, field: '', cellRenderer: 'spellAbilityCellRendererComponent'},
  ];
  public columnDefsForNightTroops = [
    {headerName: 'Name', width: 100, field: 'name'},
    {headerName: 'Level', width: 80, field: 'level'},
    {headerName: 'Progress', width: 100, field: 'isMaxLevel', cellRenderer: 'maxValueCellRendererComponent'},
    {headerName: 'Damage per sec', width: 150, field: 'damagePerSec', headerComponentFramework: DamagePerSecCellRendererComponent, cellRenderer: 'noValueCellRendererComponent'},
    {headerName: 'Damage per hit', width: 150, field: 'damagePerHit', headerComponentFramework: DamagePerHitCellRendererComponent, cellRenderer: 'noValueCellRendererComponent'},
    {headerName: 'Hitpoints', width: 100, field: 'hitPoints'}
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

  open() {
    this.modal.show();
  }

}
