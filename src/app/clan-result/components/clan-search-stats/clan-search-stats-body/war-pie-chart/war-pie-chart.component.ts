import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../../../generated/types';
import * as pattern from 'patternomaly';

@Component({
  selector: 'app-war-pie-chart',
  templateUrl: './war-pie-chart.component.html',
  styleUrls: ['./war-pie-chart.component.css']
})
export class WarPieChartComponent implements OnInit {

  @Input() clanResult: ClansByClantagType;

  public pieChartOptions: any;
  public pieChartData: number[] = [];
  public pieChartLabels: string[] = [];
  public pieChartType: string = 'pie';

  public isColorBlindnessActivated = false;
  public pieChartDefaultColors: any[] = [{
    backgroundColor: ['#2bc741', '#c70007', '#c7c4c5'],
    borderColor: ['#474B43', '#474B43', '#474B43'],
    borderWidth: [2, 2, 2]
  }];

  public pieChartColorBlindColors: any[] = [{
    backgroundColor: [
      pattern.draw('square', '#ff6384'),
      pattern.draw('circle', '#36a2eb'),
      pattern.draw('diamond', '#cc65fe'),
    ],
    borderColor: ['#474B43', '#474B43', '#474B43'],
    borderWidth: [2, 2, 2]
  }];


  ngOnInit() {
    this.configurePieChartLegend();
    this.configurePieChartData();
    const totalWar: number = this.calculateWarParticipations();
    this.pieChartOptions = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          fontSize: 20,
          fontColor: '#212529'
        }
      },
      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            let label: string = data.labels[tooltipItem.index];
            if (label) {
              label = label.slice(0, label.indexOf(':') + 1).toString();
              const percentage: string = ((data.datasets[0].data[tooltipItem.index] * 100) / totalWar).toFixed(2);
              label += percentage + '%';
            }
            return label;
          }
        }
      }
    };
  }

  public configurePieChartLegend() {
    if (!this.clanResult.isWarLogPublic) {
      this.pieChartData = [this.clanResult.warWins, 0, 0];
    }
    else {
      this.pieChartData = [this.clanResult.warWins, this.clanResult.warLosses, this.clanResult.warTies];
    }
  }

  public configurePieChartData() {
    if (!this.clanResult.isWarLogPublic) {
      this.pieChartLabels = ['Wins: ' + `${this.clanResult.warWins}`, 'Losses: Not public', 'Ties: Not public'];
    }
    else {
      this.pieChartLabels = ['Wins: ' + `${this.clanResult.warWins}`, 'Losses: ' + `${this.clanResult.warLosses}`,
        'Ties: ' + +`${this.clanResult.warTies}`];
    }
  }

  calculateWarParticipations(): number {
    if (this.clanResult.isWarLogPublic) {
      return this.clanResult.warTies + this.clanResult.warLosses + this.clanResult.warWins;
    }
    return this.clanResult.warWins;
  }

  backgroundOnChanges() {
    if (!this.isColorBlindnessActivated) {
      return this.pieChartDefaultColors;
    } else {
      return this.pieChartColorBlindColors;
    }
  }
}
