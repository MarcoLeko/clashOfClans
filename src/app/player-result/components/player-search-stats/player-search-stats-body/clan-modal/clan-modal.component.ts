import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../../../generated/types';
import {Router} from '@angular/router';
import {HashTransformerService} from '../../../../../shared/services/hash-transformer/hash-transformer.service';

@Component({
  selector: 'app-clan-modal',
  templateUrl: './clan-modal.component.html',
  styleUrls: ['./clan-modal.component.css']
})
export class ClanModalComponent {

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;
  @Output() searchPlayerOnClick: EventEmitter<string> = new EventEmitter<string>(false);

  constructor(private router: Router,
              private hashTransformer: HashTransformerService) {
  }

  open() {
    this.childModal.show();
  }

  memberSearch(member) {
    this.childModal.hide();
    this.router.navigate(['search/' + member.tag]);
    this.searchPlayerOnClick.emit(this.hashTransformer.transformHash(member.tag));
  }

}
