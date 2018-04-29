import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {IHeaderAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-trophy-night',
  template: `<span>Night <img *ngIf="trophyNightImg" [src]="trophyNightImg" width="25px" height="auto"></span>`
})
export class TrophiesNightCellRendererComponent implements IHeaderAngularComp {

  public trophyNightRef = this.storage.ref('images/trophy_night.png');
  public trophyNightImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
  }

  agInit(): void {
    this.trophyNightRef.getDownloadURL().subscribe(url => this.trophyNightImg = url);
  }
}
