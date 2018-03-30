import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-current-season-modal',
  templateUrl: './current-season-modal.component.html',
  styleUrls: ['./current-season-modal.component.css']
})
export class CurrentSeasonModalComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;

  public donations: any[] = [];
  public maxProgressBarValue: number;

  open(): void {
    console.log(this.playerResult);
    this.modal.show();
  }

  ngOnInit() {
    let types = ['success', 'danger'];
    this.maxProgressBarValue = this.playerResult.donations + this.playerResult.donationsReceived;
    this.donations.push({value: this.playerResult.donations, type: types[0], label: this.playerResult.donations});
    this.donations.push({value: this.playerResult.donationsReceived, type: types[1], label: this.playerResult.donationsReceived});
  }
}
