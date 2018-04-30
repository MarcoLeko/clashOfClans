import {Component} from '@angular/core';

import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-no-value',
  template: `{{value}}`
})
export class NoValueCellRendererComponent implements ICellRendererAngularComp {
  public value: any;

  agInit(params: any): void {
    if (!params.value) {
      this.value = '-';
    } else {
      this.value = params.value;
    }
  }

  refresh(): boolean {
    return false;
  }
}
