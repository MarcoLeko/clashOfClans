import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-max-value',
  template: `<div *ngIf="value === 'Max'" class="badge badge-warning">{{value}}</div>
  <div *ngIf="value === 'Not max'" class="badge badge-danger">{{value}}</div>`
})
export class MaxValueCellRendererComponent implements ICellRendererAngularComp {

  public value: string;

  agInit(params): void {
    for (const stat in params.data) {
      if (stat === 'isMaxLevel') {
        if (params.data[stat] === true) {
          this.value = 'Max'
        }
        else {
          this.value = 'Not max'
        }
      }
    }
  }

  refresh(): boolean {
    return false;
  }
}
