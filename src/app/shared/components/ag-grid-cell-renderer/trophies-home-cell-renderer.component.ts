import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {IHeaderAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-trophy-home',
  template: `<span>Home <img *ngIf="trophyHomeImg" [src]="trophyHomeImg" width="25px" height="auto"></span>`
})
export class TrophiesHomeCellRendererComponent implements IHeaderAngularComp {

  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyHomeImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
  }

  agInit(): void {
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
  }
}
