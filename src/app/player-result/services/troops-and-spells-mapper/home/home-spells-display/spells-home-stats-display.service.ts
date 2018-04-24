import {Injectable} from '@angular/core';
import {AdvancedSpellsHomeStatsService} from '../home-spells/advanced-spells-home-stats.service';
import {SpellsHomeStatsDisplayType} from './spells-home-stats-display.type';
import {TroopsHeroesAndSpellType} from '../../../../../../generated/types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpellsHomeStatsDisplayService {

  private spellsHomeStatsDisplayTypes: SpellsHomeStatsDisplayType[];
  private spellAbilities = ['clone', 'damage', 'freeze', 'speed', 'healing', 'jump', 'rage', 'skeletons'];

  constructor(private advancedSpellsHomeStatsService: AdvancedSpellsHomeStatsService) {
  }

  getSpellsDisplayHomeStats(spells: TroopsHeroesAndSpellType[]): Observable<SpellsHomeStatsDisplayType[]> {
    let advancedSpellStats: SpellsHomeStatsDisplayType[] = [];
    return this.advancedSpellsHomeStatsService.getSpellsStats().map(result => {
      console.log(result);
      for (const spell of spells) {
        let spellLvl: number;
        for (const spellInfo in result) {
          if (spell.name.toLowerCase() === spellInfo.toLowerCase()) {
            for (const level in result[spellInfo]) {
              spellLvl = parseInt(level.replace(/[^0-9\.]/g, ''), 10);
              if (spell.level === spellLvl) {
                advancedSpellStats.push({
                  name: spell.name, level: spell.level, isMaxLevel: spellLvl === spell.maxLevel,
                  housingSpace: result[spellInfo][level][`${'housing space'}`], type: result[spellInfo][level].type,
                  [this.searchForSpellAbility(result[spellInfo][level])]: result[spellInfo][level][this.searchForSpellAbility(result[spellInfo][level])]
                });
              }
            }
          }
        }
      }
      this.spellsHomeStatsDisplayTypes = advancedSpellStats;
      return this.spellsHomeStatsDisplayTypes;
    });
  }

  searchForSpellAbility(advancedSpellStats) {
    for (const spellType in advancedSpellStats) {
      for (const ability of this.spellAbilities) {
        if (ability === spellType) {
          return ability
        }
      }
    }
  }
}
