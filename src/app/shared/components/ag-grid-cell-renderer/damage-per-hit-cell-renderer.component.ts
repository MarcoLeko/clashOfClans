import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {IHeaderAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-damage-per-hit',
  template: `<span>Damage per hit <img *ngIf="attackImg" [src]="attackImg" width="35px" height="auto"></span>`
})
export class DamagePerHitCellRendererComponent implements IHeaderAngularComp {

  public attackForTroopRef = this.storage.ref('images/damage_icon.png');
  public attackImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
  }

  agInit(params): void {
    this.attackForTroopRef.getDownloadURL().subscribe(url => this.attackImg = url);
  }
}
