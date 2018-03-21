import {Component, Input, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';

@Component({
  selector: 'app-clan-modal',
  templateUrl: './clan-modal.component.html',
  styleUrls: ['./clan-modal.component.css']
})
export class ClanModalComponent {

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;

  open() {
    this.childModal.show();
  }
}
