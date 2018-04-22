import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';
import {BuilderInfoType} from '../../../../services/builder-info/builder-info.type';
import {TroopsHomeAttackStatsService} from '../../../../services/troops-and-spells-mapper/home/troops-home-attack-stats.service';

@Component({
  selector: 'app-troops-and-spells-modal',
  templateUrl: './troops-and-spells-modal.component.html',
  styleUrls: ['./troops-and-spells-modal.component.css']
})
export class TroopsAndSpellsModalComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;

  public builderInfo: BuilderInfoType;
  constructor(private troopsService: TroopsHomeAttackStatsService,
              private builderInfoService: BuilderInfoService) { }

  ngOnInit() {
    this.builderInfoService.getBuilderInfoType(this.playerResult.troops[0].village).subscribe(data => {
      this.builderInfo = data;
      console.log(this.playerResult);
    });
    this.troopsService.getTroopsStats().subscribe(data => console.log(data));
  }

  open() {
    this.modal.show();
  }

}
