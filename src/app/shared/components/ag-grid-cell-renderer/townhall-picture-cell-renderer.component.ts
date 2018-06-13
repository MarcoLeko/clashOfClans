import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {TownhallHomePictureService} from '../../services/townhall-picture/home/townhall-home-picture.service';

@Component({
  selector: 'app-league-badge',
  template: `
    <div *ngIf="value" class="text-center">
      <img style="padding: 0.1rem" [src]="value" width="35" height="auto">
    </div>`
})
export class TownhallPictureCellRendererComponent implements ICellRendererAngularComp {

  public value: string;

  constructor(private townHallPictureService: TownhallHomePictureService) {
  }

  agInit(params): void {
    this.townHallPictureService.getTownHallPicture(params.value).subscribe(townhallUrl => this.value = townhallUrl)
  }

  refresh(): boolean {
    return false;
  }
}
