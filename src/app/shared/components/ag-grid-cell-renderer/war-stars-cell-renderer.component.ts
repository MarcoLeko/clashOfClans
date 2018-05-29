import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-max-value',
  template: `
    <div *ngIf="value" class="text-center">
      <span class="badge badge-dark">
            <fa [name]="'star'" [size]="1"></fa>
            {{value}}
          </span>
    </div>`
})
export class WarStarsCellRendererComponent implements ICellRendererAngularComp {

  public value: string;

  agInit(params): void {
    this.value = params.value;
  }

  refresh(): boolean {
    return false;
  }
}
