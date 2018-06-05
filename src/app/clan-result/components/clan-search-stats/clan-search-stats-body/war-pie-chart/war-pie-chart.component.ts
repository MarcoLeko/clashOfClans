import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../../../generated/types';
import {ChartConfig} from './chart.config';

@Component({
  selector: 'app-war-pie-chart',
  templateUrl: './war-pie-chart.component.html',
  styleUrls: ['./war-pie-chart.component.css']
})

export class WarPieChartComponent implements OnInit {

  @Input() clanResult: ClansByClantagType;
  public pieChartConfig: ChartConfig;

  ngOnInit() {
    this.pieChartConfig = new ChartConfig(this.calculateWarParticipations());
    this.configurePieChartData();
    this.configurePieChartLegend();
  }

  public configurePieChartData() {
    if (!this.clanResult.isWarLogPublic) {
      this.pieChartConfig.setData([this.clanResult.warWins, 0, 0]);
    }
    if (!this.clanResult.warWins) {
      if (!this.clanResult.warLosses && !this.clanResult.warTies || !this.clanResult.isWarLogPublic) {
        this.pieChartConfig.setData([1, 1, 1]);
      } else {
        this.pieChartConfig.setData([0, this.clanResult.warLosses, this.clanResult.warTies]);
      }
    }
    else {
      this.pieChartConfig.setData([this.clanResult.warWins, this.clanResult.warLosses, this.clanResult.warTies]);
    }
  }

  public configurePieChartLegend() {
    if (!this.clanResult.isWarLogPublic) {
      this.pieChartConfig.setLabels(['Wins: ' + `${this.clanResult.warWins}`, 'Losses: Not public', 'Ties: Not public']);
    }
    else {
      this.pieChartConfig.setLabels(['Wins: ' + `${this.clanResult.warWins}`, 'Losses: ' + `${this.clanResult.warLosses}`,
        'Ties: ' + +`${this.clanResult.warTies}`]);
    }
  }

  calculateWarParticipations(): number {
    if (this.clanResult.isWarLogPublic) {
      return this.clanResult.warTies + this.clanResult.warLosses + this.clanResult.warWins;
    }
    return this.clanResult.warWins;
  }

  backgroundOnChanges() {
    if (!this.pieChartConfig.isColorBlindnessActivated) {
      return this.pieChartConfig.getDefaultColors();
    } else {
      return this.pieChartConfig.getColorBlindColors();
    }
  }
}
