import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {TroopsNightAttackStats} from './troops-night-attack-stats.type';

@Injectable()
export class TroopsNightAttackStatsService {

  private troopsStatsHome: TroopsNightAttackStats;
  constructor(private afs: AngularFirestore) {
  }

  getTroopsStats(): Observable<TroopsNightAttackStats> {
    return this.afs.doc<TroopsNightAttackStats>('/troops_night/F1sGTa97qmmVebiJtjhY').valueChanges().map((data:TroopsNightAttackStats) => {
      this.troopsStatsHome = data;
      return this.troopsStatsHome;
    });
  }
}
