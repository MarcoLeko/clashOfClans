import {Injectable} from '@angular/core';
import {TroopsHomeAttackStatsDisplay} from './troops-home-attack-stats-display.type';
import {TroopsHomeAttackStatsService} from '../troops-home-attack-stats.service';
import {TroopsHeroesAndSpellType} from '../../../../../../generated/types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TroopsHomeAttackStatsDisplayService {

  private troopsHomeDisplayStats: TroopsHomeAttackStatsDisplay[];

  constructor(private troopsHomeAttackStatsService: TroopsHomeAttackStatsService) {
  }

  getTroopsDisplayStats(troops: TroopsHeroesAndSpellType[]): Observable<TroopsHomeAttackStatsDisplay[]> {
    let advancedTroopsStats: TroopsHomeAttackStatsDisplay[] = [];
    return this.troopsHomeAttackStatsService.getTroopsStats().map(result => {
      for (const troop of troops) {
        let troopLvl: number;
        for (const troopInfo in result) {
          if (troop.name.toLowerCase() === troopInfo.toLowerCase()) {
            for (const level in result[troopInfo]) {
              troopLvl = parseInt(level.replace(/[^0-9\.]/g, ''), 10);
              if (troop.level === troopLvl) {
                advancedTroopsStats.push({name: troop.name, level: troop.level,
                  damagePerSec: result[troopInfo][level].dps, damagePerHit: result[troopInfo][level].dph,
                  hitPoints: result[troopInfo][level].hp, isMaxLevel: troopLvl === troop.maxLevel
                });
              }
            }
          }
        }
      }
      this.troopsHomeDisplayStats = advancedTroopsStats;
      return this.troopsHomeDisplayStats;
    });
  }
}
