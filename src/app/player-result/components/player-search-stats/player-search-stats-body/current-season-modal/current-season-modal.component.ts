import {Component, Input, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-current-season-modal',
  templateUrl: './current-season-modal.component.html',
  styleUrls: ['./current-season-modal.component.css']
})
export class CurrentSeasonModalComponent {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;
  
  open(): void {
    this.modal.show();
  }
}
