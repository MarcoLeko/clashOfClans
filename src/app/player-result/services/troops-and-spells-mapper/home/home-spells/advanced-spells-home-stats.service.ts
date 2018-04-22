import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AdvancedSpellsHomeStats} from './advanced-spells-home-stats.types';

@Injectable()
export class AdvancedSpellsHomeStatsService {

  private troopsStatsHome: AdvancedSpellsHomeStats;
  constructor(private afs: AngularFirestore) {
  }

  getSpellsStats(): Observable<AdvancedSpellsHomeStats> {
    return this.afs.doc<AdvancedSpellsHomeStats>('/spells_home/TxBYg45aEEbujvaUfrR5').valueChanges().map((data:AdvancedSpellsHomeStats) => {
      this.troopsStatsHome = data;
      return this.troopsStatsHome;
    });
  }
}
