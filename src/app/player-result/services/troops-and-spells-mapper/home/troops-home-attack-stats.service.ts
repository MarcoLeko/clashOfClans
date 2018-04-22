import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {TroopsHomeAttackStats} from './troops-home-attack-stats.type';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TroopsHomeAttackStatsService {

  private troopsHomeStats: TroopsHomeAttackStats;
  constructor(private afs: AngularFirestore) {
  }

  getTroopsStats(): Observable<TroopsHomeAttackStats> {
    return this.afs.doc<TroopsHomeAttackStats>('/troops_home/jtHhrhSDkbcqWxPinRvf').valueChanges().map((data:TroopsHomeAttackStats) => {
      this.troopsHomeStats = data;
      return this.troopsHomeStats;
    });
  }
}
