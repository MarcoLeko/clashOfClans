import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';
import {BuilderInfoService} from '../../../../services/builder-info/builder-info.service';
import {BuilderInfoType} from '../../../../services/builder-info/builder-info.type';
import {TroopsHomeAttackStatsService} from '../../../../services/troops-and-spells-mapper/home/troops-home-attack-stats.service';
import {TroopsHomeAttackStatsDisplayService} from '../../../../services/troops-and-spells-mapper/home/home-troops-display/troops-home-attack-stats-display.service';

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
              private builderInfoService: BuilderInfoService,
              private troopsHomeAttackStatsDisplayService: TroopsHomeAttackStatsDisplayService) { }

  ngOnInit() {
    this.builderInfoService.getBuilderInfoType(this.playerResult.troops[0].village).subscribe(data => {
      this.builderInfo = data;
      this.troopsHomeAttackStatsDisplayService.getTroopsDisplayStats(this.playerResult.troops).subscribe(result => {
        console.log(result)
      });
      console.log(this.playerResult);
    });
  }

  open() {
    this.modal.show();
  }

}
