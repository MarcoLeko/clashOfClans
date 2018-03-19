import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AchievementType, PlayerByPlayerTagType } from '../../../../../../../generated/types';

@Component({
  selector: 'app-achievement-modal',
  templateUrl: './achievement-modal.component.html',
  styleUrls: ['./achievement-modal.component.css']
})
export class AchievementModalComponent implements OnInit{

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;

  public achievement: AchievementType;

  ngOnInit() {
    this.chooseAchievement(this.playerResult.achievements[0].name)
  }

  open() {
    this.childModal.show();
  }

  setActiveState(name: string) {
    if (name === this.achievement.name) {
      return 'active';
    }
    return '';
  }

  chooseAchievement(name: string) {
    for (const achievement of this.playerResult.achievements) {
      if (name === achievement.name) {
        this.achievement = achievement;
      }
    }
  }
}
