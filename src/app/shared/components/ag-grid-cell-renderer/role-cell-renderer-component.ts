import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-max-value',
  template: `<div *ngIf="value === 'leader'">
    <span class="badge badge-warning">{{value | roleType}}</span></div>
    <div><span>{{value | roleType}}</span></div>`
})
export class RoleCellRendererComponent implements ICellRendererAngularComp {

  public value: string;

  agInit(params): void {
    this.value = params.value;
  }

  refresh(): boolean {
    return false;
  }
}
