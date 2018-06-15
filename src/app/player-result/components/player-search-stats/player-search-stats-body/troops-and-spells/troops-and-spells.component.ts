import {Component, Input, OnInit} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {TroopsHomeDisplayTypes} from '../../../../services/troops-and-spells/troops-home/troops-home-display.types';
import {SpellsHomeDisplayTypes} from '../../../../services/troops-and-spells/spells-home/spells-home-display.types';
import {TroopsNightDisplayTypes} from '../../../../services/troops-and-spells/troops-night/troops-night-display.types';
import {TroopsNightResolverService} from '../../../../services/troops-and-spells/troops-night/troops-night-resolver.service';
import {TroopsHomeResolverService} from '../../../../services/troops-and-spells/troops-home/troops-home-resolver.service';
import {SpellsHomeResolverService} from '../../../../services/troops-and-spells/spells-home/spells-home-resolver.service';
import {SiegeMachinesResolverService} from '../../../../services/troops-and-spells/siege-machines/siege-machines-resolver.service';
import {SiegeMachinesDisplayTypes} from '../../../../services/troops-and-spells/siege-machines/siege-machines-display.types';

@Component({
  selector: 'app-troops-and-spells',
  templateUrl: './troops-and-spells.component.html',
  styleUrls: ['./troops-and-spells.component.css']
})
export class TroopsAndSpellsComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  public troopsHome: TroopsHomeDisplayTypes[];
  public troopsNight: TroopsNightDisplayTypes[];
  public spells: SpellsHomeDisplayTypes[];
  public siegeMachines: SiegeMachinesDisplayTypes[];

  constructor(private troopsNightResolverService: TroopsNightResolverService,
              private troopsHomeResolverService: TroopsHomeResolverService,
              private spellsHomeResolverService: SpellsHomeResolverService,
              private siegeMachinesResolverService: SiegeMachinesResolverService) {
  }

  ngOnInit() {
    this.troopsHomeResolverService.getTroopsHome(this.playerResult).subscribe(troops => this.troopsHome = troops);
    this.spellsHomeResolverService.getSpellsHome(this.playerResult).subscribe(spells => this.spells = spells);
    this.troopsNightResolverService.getTroopsNight(this.playerResult).subscribe(troops => this.troopsNight = troops);
    this.siegeMachinesResolverService.getSiegeMachines(this.playerResult).subscribe(troops => this.siegeMachines = troops);
  }

  isSpellOrTroopMax(troop: any): boolean {
    return troop.maxLevel === troop.level;
  }
}
