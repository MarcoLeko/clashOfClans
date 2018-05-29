import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-league-badge',
  template: `
    <div *ngIf="value" class="text-center"><img style="padding: 0.1rem" [src]="value" width="30" height="28"></div>`
})
export class LeagueBadgeCellRendererComponent implements ICellRendererAngularComp {

  public value: string;
  public noLeagueRef = this.storage.ref('images/no_league.png');

  constructor(private storage: AngularFireStorage) {}

  agInit(params): void {
    if (params.value) {
      this.value = params.value;
    } else {
      this.noLeagueRef.getDownloadURL().subscribe(url => this.value = url);
    }
  }

  refresh(): boolean {
    return false;
  }
}
