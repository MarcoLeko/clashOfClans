import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../../../generated/types';

@Component({
  selector: 'app-war-pie-chart',
  templateUrl: './war-pie-chart.component.html',
  styleUrls: ['./war-pie-chart.component.css']
})
export class WarPieChartComponent implements OnInit {

  @Input() clanResult: ClansByClantagType;

  public pieChartData: number[] = [];
  public pieChartLabels: string[] = [];
  public pieChartType: string = 'pie';
  public pieChartColors: any[] = [{
    backgroundColor: ['#2bc741', '#c70007', '#c7c4c5'],
    borderColor: ['#474B43', '#474B43', '#474B43'],
    borderWidth: [2, 2, 2]
  }];
  public pieChartOptions: any = {
    layout: {
      padding: {
        left: 0,
        right: 80,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      position: 'right',
      labels: {
        padding: 40,
        fontSize: 20,
        fontColor: '#212529'
      }
    }
  };

  ngOnInit() {
    this.pieChartLabels = ['Wins: ' + `${this.clanResult.warWins}`, 'Losses: ' + `${this.clanResult.warLosses}`,
    'Ties: ' +  + `${this.clanResult.warTies}`];
    this.pieChartData = [this.clanResult.warWins, this.clanResult.warLosses, this.clanResult.warTies];
  }
}
