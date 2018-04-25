import {Injectable} from '@angular/core';
import {TroopsHeroesAndSpellType} from '../../../../../../generated/types';
import {Observable} from 'rxjs/Observable';
import {TroopsNightAttackStatsService} from '../troops-night-attack-stats.service';
import {TroopsNightAttackStatsDisplay} from './troops-night-attack-stats-display.type';

@Injectable()
export class TroopsNightAttackStatsDisplayService {

  private troopsNightDisplayStats: TroopsNightAttackStatsDisplay[];

  constructor(private troopsNightAttackStatsService: TroopsNightAttackStatsService) {
  }

  public getTroopsDisplayStats(troops: TroopsHeroesAndSpellType[]): Observable<TroopsNightAttackStatsDisplay[]> {
    const nightTroopsArr = troops.slice(troops.findIndex(o => o.name === 'Raged Barbarian'));

    let advancedTroopsStats: TroopsNightAttackStatsDisplay[] = [];
    return this.troopsNightAttackStatsService.getTroopsStats().map(result => {
      for (const troop of nightTroopsArr) {
        let troopLvl: number;
        for (const troopInfo in result) {
          if (troop.name.toLowerCase() === troopInfo.toLowerCase()) {
            for (const level in result[troopInfo]) {
              troopLvl = parseInt(level.replace(/[^0-9\.]/g, ''), 10);
              if (troop.level === troopLvl) {
                advancedTroopsStats.push({
                  name: troop.name, level: troop.level,
                  damagePerSec: result[troopInfo][level].dps, damagePerHit: result[troopInfo][level].dph,
                  hitPoints: result[troopInfo][level].hp, isMaxLevel: troopLvl === troop.maxLevel,
                  ability: result[troopInfo][level].ability
                });
              }
            }
          }
        }
      }
      this.troopsNightDisplayStats = advancedTroopsStats;
      return this.troopsNightDisplayStats;
    });
  }
}
