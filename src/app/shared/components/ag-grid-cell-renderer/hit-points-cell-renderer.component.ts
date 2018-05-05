import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {IHeaderAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-hit-points',
  template: `<span>Hitpoints <img *ngIf="hitPointsImg" [src]="hitPointsImg" width="20px" height="auto"></span>`
})
export class HitPointsCellRendererComponent implements IHeaderAngularComp {

  public hitPointsRef = this.storage.ref('images/hit_points.png');
  public hitPointsImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
  }

  agInit(params): void {
    this.hitPointsRef.getDownloadURL().subscribe(url => this.hitPointsImg = url);
  }
}
