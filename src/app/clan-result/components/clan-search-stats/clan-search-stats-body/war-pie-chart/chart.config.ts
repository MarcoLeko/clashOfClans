import * as pattern from 'patternomaly';

export class ChartConfig {
  private chartOptions: any;
  private chartData: number[];
  private chartLabels: string[];
  private chartDefaultColors: any[] = [{
    backgroundColor: ['#2bc741', '#c70007', '#c7c4c5'],
    borderColor: ['#474B43', '#474B43', '#474B43'],
    borderWidth: [2, 2, 2]
  }];
  private chartColorBlindColors: any[] = [{
    backgroundColor: [
      pattern.draw('square', '#ff6384'),
      pattern.draw('circle', '#36a2eb'),
      pattern.draw('diamond', '#cc65fe'),
    ],
    borderColor: ['#474B43', '#474B43', '#474B43'],
    borderWidth: [2, 2, 2]
  }];
  private chartType: 'line' | 'pie' | 'doughnut' | 'bar' | 'radar' | 'polarArea' | 'bubble' = 'doughnut';
  public isColorBlindnessActivated: boolean = false;

  constructor(totalValue: number) {
    this.chartOptions = {
      cutoutPercentage: 40,
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
              if (totalValue === 0) {
                label +=  '%';
              } else {
                label = label.slice(0, label.indexOf(':') + 1).toString();
                const percentage: string = ((data.datasets[0].data[tooltipItem.index] * 100) / totalValue).toFixed(2);
                label += percentage + '%';
              }
            }
            return label;
          }
        }
      }
    };
  }

  getChartOptions(): any {
    return this.chartOptions;
  }

  public setData(data: number[]): void {
    this.chartData = data;
  }

  public getData(): number[] {
    return this.chartData;
  }

  public setLabels(labels: string[]): void {
    this.chartLabels = labels;
  }

  public getLabels(): string[] {
    return this.chartLabels;
  }

  public getType(): 'line' | 'pie' | 'doughnut' | 'bar' | 'radar' | 'polarArea' | 'bubble' {
    return this.chartType;
  }

  public getDefaultColors(): any[] {
    return this.chartDefaultColors;
  }

  public getColorBlindColors(): any[] {
    return this.chartColorBlindColors;
  }
}
