import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-spell-ability',
  template: `{{value}}`
})
export class SpellAbilityCellRendererComponent implements ICellRendererAngularComp {

  public value: number | string;

  agInit(params): void {
    for (const stat in params.data) {
      if (stat !== 'name' && stat !== 'level' && stat !== 'isMaxLevel'
        && stat !== 'housingSpace' && stat !== 'type') {
        if (stat === 'rage') {
          this.value = params.data[stat] + '%';
        }
        else if (stat === 'skeletons') {
          this.value = 'x ' + params.data[stat];
        }
        else if (stat === 'speed') {
          this.value = params.data[stat] + ' Increase';
        }
        else {
          this.value = params.data[stat];

        }
      }
    }
  }

  refresh(): boolean {
    return false;
  }
}
