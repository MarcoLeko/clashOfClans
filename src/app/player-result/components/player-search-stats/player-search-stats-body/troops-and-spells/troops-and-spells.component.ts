import {Component, Input, OnInit} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {TroopsAndSpellsService} from '../../../../services/troops-and-spells/troops-and-spells.service';
import {TroopsHomeDisplayTypes} from '../../../../services/troops-and-spells/troops-home-display.types';
import {SpellsHomeDisplayTypes} from '../../../../services/troops-and-spells/spells-home-display.types';

@Component({
  selector: 'app-troops-and-spells',
  templateUrl: './troops-and-spells.component.html',
  styleUrls: ['./troops-and-spells.component.css']
})
export class TroopsAndSpellsComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  public troops: TroopsHomeDisplayTypes[];
  public spells: SpellsHomeDisplayTypes[];

  constructor(private troopsAndSpellsService: TroopsAndSpellsService) { }

  ngOnInit() {
    this.troopsAndSpellsService.getTroopsHome(this.playerResult).subscribe(troops => this.troops = troops);
    this.troopsAndSpellsService.getSpellsHome(this.playerResult).subscribe(spells => this.spells = spells);
  }

  isSpellOrTroopMax(troop: any): boolean {
    return troop.maxLevel === troop.level
  }
}
