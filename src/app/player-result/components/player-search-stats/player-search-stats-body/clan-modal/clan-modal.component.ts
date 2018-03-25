import {Component, Input, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../../../generated/types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clan-modal',
  templateUrl: './clan-modal.component.html',
  styleUrls: ['./clan-modal.component.css']
})
export class ClanModalComponent {

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  constructor(private router: Router) {
  }

  open() {
    this.childModal.show();
  }

  memberSearch(member) {
    this.childModal.hide();
    this.router.navigate(['search/' + member.tag]);
  }

}
