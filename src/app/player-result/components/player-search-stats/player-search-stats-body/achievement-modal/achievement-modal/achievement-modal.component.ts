import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {AchievementType, PlayerByPlayerTagType} from '../../../../../../../generated/types';
import {BuilderInfoService} from '../../../../../services/builder-info/builder-info.service';
import {BuilderInfoType} from '../../../../../services/builder-info/builder-info.type';

@Component({
  selector: 'app-achievement-modal',
  templateUrl: './achievement-modal.component.html',
  styleUrls: ['./achievement-modal.component.css']
})
export class AchievementModalComponent implements OnInit {

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;

  public achievement: AchievementType;
  public builderInfo: BuilderInfoType;

  constructor(private builderInfoService: BuilderInfoService) {
  }

  ngOnInit(): void {
    this.chooseAchievement(this.playerResult.achievements[0].name);
  }

  open(): void {
    this.childModal.show();
  }

  setActiveState(name: string): string {
    if (name === this.achievement.name) {
      return 'active';
    }
    return '';
  }

  chooseAchievement(name: string): void {
    for (const achievement of this.playerResult.achievements) {
      if (name === achievement.name) {
        this.achievement = achievement;
        this.builderInfo = this.builderInfoService.getBuilderInfoType(this.achievement.village);
      }
    }
  }

  calculateProgress(value, target): number {
    let percentage: number = (value / target) * 100;
    if (percentage > 100) {
      return 100;
    }
    return percentage;
  }

  calculateCompletedAchievements(): number {
    let completedAchievements: number = 0;
    for (let achievement of this.playerResult.achievements) {
      if (achievement.value >= achievement.target) {
        completedAchievements++;
      }
    }
    return completedAchievements;
  }
}
