import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';
import {BuilderInfoType} from '../../../../services/builder-info/builder-info.type';

@Component({
  selector: 'app-troops-and-spells-modal',
  templateUrl: './troops-and-spells-modal.component.html',
  styleUrls: ['./troops-and-spells-modal.component.css']
})
export class TroopsAndSpellsModalComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;

  public builderInfo: BuilderInfoType;
  constructor(private builderInfoService: BuilderInfoService) { }

  ngOnInit() {
    console.log(this.playerResult.troops);
    console.log(this.playerResult.spells);
    this.builderInfoService.getBuilderInfoType(this.playerResult.troops[0].village).subscribe(data => {
      console.log(data);
      this.builderInfo = data
    });
  }

  open() {
    this.modal.show();
  }

}
