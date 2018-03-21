import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../../../generated/types';

@Component({
  selector: 'app-clan-modal',
  templateUrl: './clan-modal.component.html',
  styleUrls: ['./clan-modal.component.css']
})
export class ClanModalComponent implements OnChanges {

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  ngOnChanges() {
    console.log(this.clanInfo)
  }

  open() {
    this.childModal.show();
  }
}
