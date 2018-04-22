import {Injectable} from '@angular/core';
import {TroopsHomeAttackStatsDisplay} from './troops-home-attack-stats-display.type';
import {TroopsHomeAttackStatsService} from '../troops-home-attack-stats.service';
import {TroopsHeroesAndSpellType} from '../../../../../../generated/types';

@Injectable()
export class TroopsHomeAttackStatsDisplayService {

  private troopsHomeDisplayStats: TroopsHomeAttackStatsDisplay[];

  constructor(private troopsHomeAttackStatsService: TroopsHomeAttackStatsService) {
  }

  getTroopsDisplayStats(troops: TroopsHeroesAndSpellType[]) {
    let advancedTroopsStats: TroopsHomeAttackStatsDisplay[] = [];

    return this.troopsHomeAttackStatsService.getTroopsStats().map(result => {
      for (const troop of troops) {
        let troopLvl: number;
        for (const dbTroop in result) {
          if (troop.name.toLowerCase() === dbTroop.toLowerCase()) {
            for (const level in result[dbTroop]) {
              troopLvl = parseInt(level.replace(/[^0-9\.]/g, ''), 10);
              if (troop.level === troopLvl) {
                advancedTroopsStats.push({
                  name: troop.name,
                  level: troop.level,
                  damagePerSec: result[dbTroop][level].dps,
                  damagePerHit: result[dbTroop][level].dph,
                  hitPoints: result[dbTroop][level].hp,
                  isMaxLevel: troopLvl === troop.maxLevel
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
